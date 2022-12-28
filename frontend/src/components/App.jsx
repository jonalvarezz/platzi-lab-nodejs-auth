import { useState } from 'react';
import { deleteProfileService } from '../services/profile.services';
import { Login } from './Screens/Login';
import { Signup } from './Screens/Signup';
import { UpdateProfile } from './Screens/UpdateProfile';

export const App = () => {
  const [user, setUser] = useState(null);

  const updateUser = (user) => {
    setUser(user);
  };

  const handleDeleteClick = async () => {
    const [response, _] = await deleteProfileService();
    if (response) setUser(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-8 md:grid-cols-3">
      <Signup />
      <Login updateUserCallback={updateUser} />
      <section className="bg-sky-200 p-4 overflow-x-auto">
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user && (
          <button
            className="w-full p-2 bg-red-500"
            onClick={() => {
              handleDeleteClick();
            }}
          >
            Delete account
          </button>
        )}
      </section>
      <UpdateProfile updateUserCallback={updateUser} />
    </div>
  );
};
