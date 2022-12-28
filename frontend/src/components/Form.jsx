export const Form = ({ fields, title }) => {
  return (
    <form>
      {fields.map((field, index) => {
        return (
          <div className="my-4" key={`${title}-${index}`}>
            <label htmlFor={field.name} className="block">
              {field.name}
            </label>
            <input
              className="w-full p-1"
              name={field.name}
              id={field.name}
              type={field.type}
              required={true}
            />
          </div>
        );
      })}
      <input
        className="w-full p-2 my-2 bg-white"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
