import { NavLink } from "react-router-dom";
import getLogos from "../resources/Logos";


export default function NavMenu(props){
    let Logo = getLogos();

    var active = props.active;

    return (
        <div className={active? "  font-Rasa fixed right-0 z-10 w-3/4 h-screen md:translate-x-full lg:translate-x-full bg-NealabPink transition ease-in-out " : " font-Rasa fixed z-10 right-0 h-screen md:translate-x-full lg:translate-x-full bg-NealabPink translate-x-full transition ease-in-out"}>
        <div className="flex flex-col text-white text-lg mt-5 ml-4">
            <div className="flex flex-row justify-between">
        <NavLink className="whitespace-nowrap text-3xl hover:font-bold hover:cursor-pointer mb-10" to="/">Nealab Rasooli</NavLink>
        <button onClick={() => {
            props.setMenu(false);
        }} className="text-white flex jusify-center items-center mb-10 mr-6">{Logo.cross}</button>
            </div>

        <NavLink onClick={() => props.setMenu(!props.menu)} style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/services">Services</NavLink>
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/portfolio">Portfolio</NavLink>
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/reviews">Reviews</NavLink>
                    
                    <NavLink style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }} className="px-2 hover:font-bold hover:cursor-pointer hover:scale-105" to="/contact">Contact</NavLink>
        </div>
        <div className="ml-5 text-white flex flex-col fixed bottom-20 left translate-x-1/2">

<a href="https://www.instagram.com/neala_makeupartistry/" className="my-5 hover:scale-125">
    {Logo.instagram}
</a>
<a href="https://www.facebook.com/nealamakeupartistry" className="hover:scale-125">{Logo.facebook}</a>


</div>
    </div>
    )
}