// pages/profile/two-step/[userId].js

import { useRouter } from 'next/router';
import { enableTwoStepVerification } from '../../../src/utils/api';

const EnableTwoStepVerificationPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const handleEnableTwoStepVerification = async () => {
    try {
      await enableTwoStepVerification(userId);
      // Optionally, you can redirect to the user's profile page or display a success message
    } catch (error) {
      console.error('Error enabling two-step verification:', error);
      // Handle the error (display an error message, etc.)
    }
  };

  return (
    <div>
      <h1>Enable Two-Step Verification</h1>
      <button onClick={handleEnableTwoStepVerification}>Enable Two-Step Verification</button>
    </div>
  );
};

export default EnableTwoStepVerificationPage;
