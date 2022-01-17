import { NavLink } from "react-router-dom";
import getLogos from "../resources/Logos";

export default function Header(props) {
  let Logo = getLogos();
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <NavLink
          className="text-3xl  hover:cursor-pointer"
          to="/"
        >
          Nealab Rasooli
        </NavLink>

        <div className="hidden md:flex lg:flex md:justify-center md:items-center lg:justify-center lg:items-center md:pl-5 lg:pl-10">
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105"
            to="/reviews"
          >
            Reviews
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      {props.contact ? (
        <div className=""></div>
      ) : (
        <div className="hidden md:flex md:flex-row lg:flex lg:flex-row justify-center items-center">
          <a
            href="https://www.instagram.com/neala_makeupartistry/"
            className="mx-2 hover:scale-125"
          >
            {Logo.instagram}
          </a>
          <a
            href="https://www.facebook.com/nealamakeupartistry"
            className="mx-2 hover:scale-125"
          >
            {Logo.facebook}
          </a>
        </div>
      )}

      <div className={"flex justify-center items-center md:hidden lg:hidden"}>
        <button onClick={() => props.setMenu(!props.menu)} className="">
          {Logo.hamburgerMenu}
        </button>
      </div>
    </div>
  );
}
