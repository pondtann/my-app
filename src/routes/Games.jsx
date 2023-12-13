import { Link, Outlet } from "react-router-dom";

function Games() {
  let button =
    "bg-bright-med hover:bg-bright-most text-white font-bold py-2 px-4 w-32 rounded flex";

  return (
    <>
      <Outlet />
      <div className="align-middle container mt-6 m-auto">
        <h1 className="text-3xl text-bold">Games</h1>
        <Link to="create-game" className={button}>
          New Game
        </Link>
      </div>
    </>
  );
}

export default Games;
