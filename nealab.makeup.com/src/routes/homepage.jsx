import { useState } from "react";
import EnquireButton from "../components/EnquireButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import PhotoSlider from "../components/PhotoSlider";

export default function Homepage() {
    const [menu, setMenu] = useState(false);
    return (

        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
    <NavMenu setMenu={setMenu} active={menu}/>

            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>
        <div className="mt-20 md:mt-15 lg:mt-20 mx-5 md:mx-10 lg:mx-10">
            <PhotoSlider />
        </div>

            <div className="flex justify-center mt-20 md:mt-15 lg:mt-20 text-xl">
                <EnquireButton />

            </div>
            <div className="flex justify-center text-sm mt-20">
                <Footer />
            </div>
        </div>
    )
}