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

export const UpdateProfile = () => {
  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Update Profile</h1>
      <Form title={'login'} fields={loginFormFields} />
    </section>
  );
};
