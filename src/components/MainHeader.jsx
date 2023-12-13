import { Link } from "react-router-dom";
import { MdAddBox, MdWork } from "react-icons/md";

function MainHeader() {
  let button =
    "bg-bright-med hover:bg-bright-most text-white font-bold py-2 px-4 rounded flex";
  return (
    <>
      <header className="align-middle container mt-6 m-auto flex justify-between ">
        <div className="flex gap-5">
          <h1 className=" bg-center text-4xl font-bold">My App</h1>
          <div className="flex gap-4">
            <p className={button}>
              <Link to="/" className="flex gap-2">
                <MdWork size={20} /> Home
              </Link>
            </p>
            <p className={button}>
              <Link to="/games" className="flex gap-2">
                <MdWork size={20} /> GameLibrary
              </Link>
            </p>
          </div>
        </div>
        <p className={button}>
          <Link to="/hire-me" className="flex gap-2">
            <MdWork size={20} /> Hire Me
          </Link>
        </p>
        
      </header>
      <hr className="container mx-auto mt-8" />
    </>
  );
}

export default MainHeader;
