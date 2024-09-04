import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between custom-container  text-white py-[1vw] ">
      <NavLink to="/" className="text-[3vw] lg:text-[1.75vw] font-bold">
        CampusLenz
      </NavLink>
      <ul className="headerNavbar flex items-center gap-8 gap-[2vw] text-[2vw] lg:text-[1vw]">
        <li>
          <NavLink className="block px-[1vw] py-[0.5vw] relative" to="events">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink className="block px-[1vw] py-[0.5vw] relative" to="upload">
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block px-[1vw] py-[0.5vw] w-[15vw] lg:w-[8.5vw] relative"
            to="view-posts"
          >
            View my posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block px-[1vw] py-[0.5vw] relative"
            to="dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
      <button className="text-[2.5vw] lg:text-[1.25vw]">
        <Link to="/login">Logout</Link>
      </button>
    </nav>
  );
}
