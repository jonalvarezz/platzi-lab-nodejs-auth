import { useState } from 'react';

export const Form = ({ fields, title, callback }) => {
  const [errors, setErrors] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const data = Object.fromEntries(new FormData(e.target));

    // Use the callback function and update the errors state
    const fetch = async () => {
      const [response, error] = await callback(data);

      error ? setErrors(error) : setErrors([]);
      if (response) e.target.reset();
    };

    fetch();
  };

  return (
    <form onSubmit={HandleSubmit}>
      {fields.map((field, index) => {
        return (
          <div className="my-4" key={`${title}-${index}`}>
            <label htmlFor={field.label} className="block">
              {field.label}
            </label>
            <input
              className="w-full p-1"
              name={field.name}
              id={field.label}
              type={field.type}
              required={true}
              placeholder={field.placeholder}
            />
          </div>
        );
      })}
      <ul className="list-disc ml-4 text-red-600 text-justify">
        {errors.map((error, index) => (
          <li className="capitalize" key={`${title}-err-${index}`}>
            {error.param ? `[${error.param}]: ${error.msg}` : error}
          </li>
        ))}
      </ul>
      <input
        className="w-full p-2 my-2 bg-white"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
