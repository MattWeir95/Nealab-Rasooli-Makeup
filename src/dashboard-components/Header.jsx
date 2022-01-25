import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function Header(props) {

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row">

                <NavLink className="text-3xl px-2 hover:font-bold hover:cursor-pointer" to="/dashboard">Dashboard</NavLink>


                <div className="hidden md:flex lg:flex md:justify-center md:items-center lg:justify-center lg:items-center md:pl-5 lg:pl-10">
      
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/dashboard/services">Services</NavLink>
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/dashboard/portfolio">Portfolio</NavLink>
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/dashboard/reviews">Reviews</NavLink>
                    
                    

                </div>
            
            </div>
            
            <div className="hidden md:flex md:flex-row lg:flex lg:flex-row justify-center items-center">

                    <LogoutButton />

            </div>
            

        </div>

    )

}