// profile.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entity/profile.entity';
import { UpdateProfileDto, UserProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async getUserProfile(userId: number): Promise<UserProfileDto | undefined> {
    const profile = await this.profileRepository.findOne(userId);
    return profile ? this.mapToUserProfileDto(profile) : undefined;
  }

  async updateUserProfile(userId: number, updatedProfile: UpdateProfileDto): Promise<UserProfileDto | null> {
    const existingProfile = await this.profileRepository.findOne(userId);

    if (existingProfile) {

      await this.profileRepository.update(userId, { ...existingProfile, ...updatedProfile });

      const updated = await this.profileRepository.findOne(userId);
      return updated ? this.mapToUserProfileDto(updated) : null;
    }

    return null; // User not found
  }

  async deleteUserProfile(userId: number): Promise<UserProfileDto | null> {
    const existingProfile = await this.profileRepository.findOne(userId);

    if (existingProfile) {
      const deletedProfile = await this.profileRepository.remove(existingProfile);
      return this.mapToUserProfileDto(deletedProfile);
    }

    return null; // User not found
  }

  private mapToUserProfileDto(profile: Profile): UserProfileDto {
    return {
      id: profile.id,
      username: profile.username,
      email: profile.email,
      profilePhoto: profile.profilePhoto,
      twoStepVerification: profile.twoStepVerification,
      // Map other profile details as needed
    };
  }
}
