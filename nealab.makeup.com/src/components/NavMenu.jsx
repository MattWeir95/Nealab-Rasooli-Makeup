import { NavLink } from "react-router-dom";
import getLogos from "../resources/Logos";

export default function NavMenu(props) {
  let Logo = getLogos();

  return (
    <div
      ref={props.node}
      className={
        props.menu
          ? "font-Rasa fixed z-10  w-3/4 h-screen md:translate-x-full lg:translate-x-full bg-NealabPink transition ease-in-out right-0 delay-150"
          : "font-Rasa fixed z-10  w-3/4 h-screen md:translate-x-full lg:translate-x-full bg-NealabPink translate-x-full transition ease-in-out right-0 delay-150"
      }
    >
      <div className="flex flex-col text-white text-lg mt-5 ml-4">
        <div className="flex flex-row justify-between">
          <NavLink
            className="whitespace-nowrap text-3xl hover:font-bold hover:cursor-pointer mb-10"
            to="/"
          >
            Nealab Rasooli
          </NavLink>
          <button
            onClick={() => {
              props.setMenu(!props.menu);
            }}
            className="mb-10 text-white mr-5"
          >
            {Logo.cross}
          </button>
        </div>

        <NavLink
          onClick={() => props.setMenu(!props.menu)}
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
      <div className="ml-5 text-white flex flex-col fixed bottom-20 left translate-x-1/2">
        <a
          href="https://www.instagram.com/neala_makeupartistry/"
          className="my-5 hover:scale-125"
        >
          {Logo.instagram}
        </a>
        <a
          href="https://www.facebook.com/nealamakeupartistry"
          className="hover:scale-125"
        >
          {Logo.facebook}
        </a>
      </div>
    </div>
  );
}
