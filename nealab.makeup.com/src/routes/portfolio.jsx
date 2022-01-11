import { useState } from "react";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

export default function Portfolio() {
    const [menu, setMenu] = useState(false);

    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
    <NavMenu setMenu={setMenu} active={menu}/>

            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>

<div className="pt-10 mx-5 h-5/6">
            <div id="portfolio" class="container mx-auto grid lg:gap-2 lg:grid lg:grid-cols-3 md:gap-1 md:grid md:grid-cols-2  overflow-y-scroll h-full px-2">
                {PortfolioPhotos.map((photo) => {
                    return (
                        <div class="w-full rounded hover:shadow-lg hover:cursor-pointer hover:opacity-90 mb-1">
                            <img className="rounded-sm" src={photo.link}
                                alt={photo.name} />
                        </div>
                    )
                })}

            </div>
            </div>
          
        </div>
    )
}


var PortfolioPhotos = [{
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
}, {
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
},{
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
},{
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
},]