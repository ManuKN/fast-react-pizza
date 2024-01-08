import { useSelector } from "react-redux";
import CreateUser from "../features/User/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <div className="text-xl font-semibold text-center my-10">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl px-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? <CreateUser /> : <Button type='primary' to='/menu'>Continue Ordering ,{username}</Button>}
    </div>
  );
}

export default Home;
