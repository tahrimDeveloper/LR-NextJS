import { doLogout } from '../app/actions';

const Logout = () => {
  return (
    <form action={doLogout}>
      <button className="bg-blue-400  text-white p-1 rounded" type="submit">
        Logout
      </button>
    </form>
  );
};

export default Logout;
