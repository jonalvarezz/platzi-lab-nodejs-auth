import { Form } from '../Form';

const loginFormFields = [
  { label: 'Username', name: 'username', type: 'text', placeholder: 'pedro' },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '******',
  },
];

export const Login = () => {
  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Login</h1>
      <Form title={'login'} fields={loginFormFields} />
    </section>
  );
};
