// profile.dto.ts

export class UserProfileDto {
  id: number;
  username: string;
  email: string;
  profilePhoto: string; // Add this line for profile photo
  twoStepVerification: boolean; // Add this line for two-step verification
  // Add other profile details as needed
}

export class UpdateProfileDto {
  username?: string;
  email?: string;
  profilePhoto?: string; // Add this line for profile photo
  twoStepVerification?: boolean; // Add this line for two-step verification
  // Add other profile details as needed
}
