// profile.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profilePhoto: string; // Add this line for profile photo

  @Column({ default: false })
  twoStepVerification: boolean; // Add this line for two-step verification

  // Add other profile details as needed
}
