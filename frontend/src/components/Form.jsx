export const Form = ({ fields, title }) => {
  return (
    <form>
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
      <input
        className="w-full p-2 my-2 bg-white"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
