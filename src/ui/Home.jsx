import CreateUser from "../features/User/CreateUser";

function Home() {
  return (
    <div className="text-xl font-semibold text-center my-10">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl px-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
