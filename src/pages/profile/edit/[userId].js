// pages/profile/[userId].js

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchUserProfile } from '../../src/utils/api';

const UserProfilePage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: profile, isLoading, isError } = useQuery(['profile', userId], () => fetchUserProfile(userId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching profile</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {profile.id}</p>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* Add other profile details as needed */}
    </div>
  );
};

export default UserProfilePage;
