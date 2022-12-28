import { Form } from '../Form';

const SignupFormFields = [
  { label: 'Username', name: 'username', type: 'text', placeholder: 'Pedro' },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '******',
  },
];

export const Signup = () => {
  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Signup</h1>
      <Form title={'signup'} fields={SignupFormFields} />
    </section>
  );
};
