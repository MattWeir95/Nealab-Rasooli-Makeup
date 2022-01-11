import { useState } from "react";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

export default function Reviews(){
    const [menu, setMenu] = useState(false);

    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
    <NavMenu setMenu={setMenu} active={menu}/>
    
            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>
            
            
        </div>
    )
}