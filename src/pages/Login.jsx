import Eye from "../assets/eye.jsx";

function Login() {
  return (
    <>
      <div id="bottom" className="flex fixed top-0 left-0 w-full justify-center pt-6">
        top gear
      </div>

      <div id="top" className="min-h-screen flex items-center justify-center">
        <div
          id="container"
          className="flex p-10 gap-10 border-4 border-red-600 rounded-3xl bg-zinc-800"
        >
          <div id="title" className="pb-6">
            <Eye />
            <h1 className="text-3xl font-bold underline">ZAM Monitoring</h1>
          </div>

          <div id="center" className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold">Sign in to your account</h2>
            <form className="flex flex-col gap-3 w-64">
              <label className="flex left-0">Username</label>
              <input type="text" className="border p-2 rounded" />
              <label className="flex left-0">Password</label>
              <input type="text" className="border p-2 rounded" />
              <button
                type="submit"
                className="border-1 border-red-600 bg-red-600 text-white font-bold rounded"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="bottom" className="flex fixed bottom-0 left-0 w-full justify-center pb-6">
        bottom gear rising
      </div>
    </>
  );
}

export default Login;
