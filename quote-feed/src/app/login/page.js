import { doSocialLogin } from '@/app/actions';

function login() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Hey, time to Sign In</h1>

      <form action={doSocialLogin}>
        <button
          className="bg-pink-700 text-white p-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="google">
          SignIn with Google
        </button>

        <button
          className="bg-purple-700 text-white p-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="github">
          SignIn with Github
        </button>
      </form>
    </div>
  );
}

export default login;
