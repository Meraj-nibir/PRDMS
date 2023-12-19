// pages/profile/photo/[userId].js

import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateProfilePhoto } from '../../../src/utils/api';

const ChangeProfilePhotoPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChangeProfilePhoto = async () => {
    try {
      await updateProfilePhoto(userId, profilePhoto);
      // Optionally, you can redirect to the user's profile page or display a success message
    } catch (error) {
      console.error('Error updating profile photo:', error);
      // Handle the error (display an error message, etc.)
    }
  };

  return (
    <div>
      <h1>Change Profile Photo</h1>
      <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} />
      <button onClick={handleChangeProfilePhoto}>Change Photo</button>
    </div>
  );
};

export default ChangeProfilePhotoPage;
