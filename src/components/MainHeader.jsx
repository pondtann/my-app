import { Link } from "react-router-dom";
import { MdAddBox, MdWork } from "react-icons/md";

function MainHeader() {
  return (
    <>
      <header className="align-middle container mt-6 m-auto flex justify-between">
        <div className="flex gap-5">
          <h1 className=" bg-center text-4xl font-bold">My App</h1>
          <p className="flex gap-4">
            <Link to="/">
              <MdWork size={20} /> Home
            </Link>
            <Link to="/games">
              <MdWork size={20} /> GameLibrary
            </Link>
          </p>
        </div>
        <p>
          <Link to="/hire-me">
            <MdWork size={20} /> Hire Me
          </Link>
        </p>
      </header>
      <hr className="container mx-auto mt-8" />
    </>
  );
}

export default MainHeader;
