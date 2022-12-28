import {
  getProfileService,
  updateProfileService,
} from '../../services/profile.services';
import { Form } from '../Form';

const loginFormFields = [
  {
    label: 'New Username',
    name: 'newUsername',
    type: 'text',
    placeholder: 'pedro',
  },
  {
    label: 'New Password',
    name: 'newPassword',
    type: 'password',
    placeholder: '******',
  },
  {
    label: 'Current Password',
    name: 'currentPassword',
    type: 'password',
    placeholder: '******',
  },
];

export const UpdateProfile = ({ updateUserCallback }) => {
  const updateProfileCallback = async ({
    newUsername,
    newPassword,
    currentPassword,
  }) => {
    const [response, error] = await updateProfileService(
      newUsername,
      newPassword,
      currentPassword
    );

    if (response) {
      // Update the user, so, the third "Screen" is updated
      const [user, _] = await getProfileService();
      updateUserCallback(user);
    }

    return [response, error];
  };

  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Update Profile</h1>
      <Form
        title={'login'}
        fields={loginFormFields}
        callback={updateProfileCallback}
      />
    </section>
  );
};
