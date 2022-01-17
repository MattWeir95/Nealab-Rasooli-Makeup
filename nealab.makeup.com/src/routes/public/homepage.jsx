import { useEffect, useRef, useState } from "react";
import EnquireButton from "../../components/EnquireButton";
import EnquireForm from "../../components/EnquireForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import PhotoSlider from "../../components/PhotoSlider";

export default function Homepage() {
    const [menu, setMenu] = useState(false);
    const [enquireForm, setEnquireForm] = useState(false);
    const node = useRef();

    //Add a mouse down listener to the Homepage component, remove on demount.
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [])

    
    const handleClick = e => {
        if(node.current.contains(e.target)) {
            return;
        }
        setMenu(false);
    }


        return (

        <div className="">

    <NavMenu setMenu={setMenu} active={menu}/>
    <EnquireForm node={node} setEnquireForm={setEnquireForm} enquireForm={enquireForm}/>

        <div className={menu || enquireForm ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50" : "font-Rasa text-NealabDarkPink h-screen w-full "}>
            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>

            <div className="text-center text-4xl mt-20 mx-4 lg:mt-10 md:mt-10">Professional Makeup Artist</div>
        <div className="z-0 mt-10 mx-5 md:mx-10 lg:mx-10">
            <PhotoSlider enquireForm={enquireForm} />
        </div>

     

            <div className="flex justify-center mt-20 md:mt-15 lg:mt-20 text-xl">
                <EnquireButton enquireForm={enquireForm} setEnquireForm={setEnquireForm}/>

            </div>
            <div className="flex justify-center text-sm mt-20 md:mt-10 lg:mt-10">
                <Footer />
            </div>
        </div>
        </div>

    )
}