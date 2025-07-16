import { doSocialLogin } from '../app/actions';

const SocialLogins = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="google">
        Sign In With Google
      </button>

      <button
        className="bg-blue-600 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="github">
        Sign In With GitHub
      </button>
    </form>
  );
};

export default SocialLogins;
