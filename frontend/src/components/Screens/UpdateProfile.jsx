import { Form } from '../Form';

const loginFormFields = [
  { name: 'New Username', type: 'text' },
  { name: 'New Password', type: 'password' },
  { name: 'Current Password', type: 'password' },
];

export const UpdateProfile = () => {
  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Update Profile</h1>
      <Form title={'login'} fields={loginFormFields} />
    </section>
  );
};
