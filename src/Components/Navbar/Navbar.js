import { BiRocket } from "react-icons/bi";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark mb-4 bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <BiRocket className="d-inline-block mx-3 align-text-top" />
            Orbit-Draw
          </a>
        </div>
      </nav>
    </>
  );
};
