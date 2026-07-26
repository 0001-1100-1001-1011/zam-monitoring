const registerForm = () => {
  return (
    <form className="relative flex gap-3 flex-col border-red-600 mb-3">
      <div>
        <label> Username </label>
        <input
          type="text"
          placeholder="Max Mustermann"
          className="
        border
        w-full
        p-2
        rounded-sm
        focus:outline-none
        focus:ring-2
        focus:ring-white"
        />
      </div>

      <div>
        <label> E-Mail </label>
        <input
          type="text"
          placeholder="Max.mustermann@test.de"
          className="
        border
        w-full
        p-2
        rounded-sm
        focus:outline-none
        focus:ring-2
        focus:ring-white"
        />
      </div>
      <div>
        <label> Password </label>
        <input
          type="password"
          placeholder="********"
          className="
        border
        w-full
        p-2
        rounded-sm
        focus:outline-none
        focus:ring-2
        focus:ring-white"
        />
      </div>
    </form>
  );
};

export default registerForm;
