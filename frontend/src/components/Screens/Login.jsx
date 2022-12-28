import { loginService } from '../../services/auth.services';
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
  const loginCallback = async ({ username, password }) => {
    const [response, error] = await loginService(username, password);
    return [response, error];
  };

  return (
    <section className="bg-sky-200 p-4">
      <h1 className="text-2xl text-center">Login</h1>
      <Form title={'login'} fields={loginFormFields} callback={loginCallback} />
    </section>
  );
};
