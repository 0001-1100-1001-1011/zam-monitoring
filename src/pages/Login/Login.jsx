function Login() {
  return (
    <>
      <section id="title">
        <h1 className="text-3xl font-bold underline">ZAM Monitoring</h1>
      </section>

      <div id="eye">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 50 
           C 100 -10 100 -10 190 50
           C 100 110 100 110 10 50 Z"
            fill="red"
            stroke="black"
            stroke-width="10"
          />
          <circle cx="100" cy="50" r="50" />
          <circle cx="100" cy="50" r="40" fill="white" />
          <circle cx="100" cy="50" r="20" />
          <circle cx="90" cy="40" r="8" fill="white" />
        </svg>
      </div>

      <section id="center">
        <div id="signin">
          <h2>Sign In</h2>
        </div>
        <div id="inputs">
          <form action="signin">
            <input type="text" />
            <input type="text" />
            <button type="submit" className="border-1 border-red-700 rounded">
              Sign in
            </button>
          </form>
        </div>
      </section>

      <section id="bottom">bottom</section>
    </>
  );
}

export default Login;
