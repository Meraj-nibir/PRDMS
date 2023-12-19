import { Controller, Get, Put, Delete, UseGuards, Req, Body } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { ProfileService } from './profile.service';
import { UpdateProfileDto, UserProfileDto } from './dto/profile.dto';

@Controller('api')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profile')
  @UseGuards(AuthGuard)
  async getProfile(@Req() req): Promise<{ profile: UserProfileDto } | undefined> {
    const userId = req.userId;
    const userProfile = await this.profileService.getUserProfile(userId);
    return userProfile ? { profile: userProfile } : undefined;
  }

  @Put('profile')
  @UseGuards(AuthGuard)
  async updateProfile(
    @Req() req,
    @Body() updatedProfile: UpdateProfileDto,
  ): Promise<{ message: string; profile?: UserProfileDto } | { message: string }> {
    const userId = req.userId;
    const userProfile = await this.profileService.updateUserProfile(userId, updatedProfile);

    if (userProfile) {
      return { message: 'Profile updated successfully', profile: userProfile };
    }

    return { message: 'User not found' };
  }

  @Delete('profile')
  @UseGuards(AuthGuard)
  async deleteProfile(@Req() req): Promise<{ message: string; profile?: UserProfileDto } | { message: string }> {
    const userId = req.userId;
    const deletedProfile = await this.profileService.deleteUserProfile(userId);

    if (deletedProfile) {
      return { message: 'Profile deleted successfully', profile: deletedProfile };
    }

    return { message: 'User not found' };
  }
}
