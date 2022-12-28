import { Login } from './Screens/Login';
import { Signup } from './Screens/Signup';
import { UpdateProfile } from './Screens/UpdateProfile';

export const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-8 md:grid-cols-3">
      <Signup />
      <Login />
      <p>Get profile screen placeholder</p>
      <UpdateProfile />
    </div>
  );
};
