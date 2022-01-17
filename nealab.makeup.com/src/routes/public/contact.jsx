import {  useState } from "react";
import EnquireButton from "../../components/EnquireButton";
import EnquireForm from "../../components/EnquireForm";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import getLogos from "../../resources/Logos";

export default function Contact() {
    const [menu, setMenu] = useState(false);
    const [enquireForm, setEnquireForm] = useState(false);

    var Logo = getLogos();


   
    return (
        <div className="">

        <NavMenu  setMenu={setMenu} active={menu}/>
        <EnquireForm  setEnquireForm={setEnquireForm} enquireForm={enquireForm}/>
        <div className={menu || enquireForm ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50" : "font-Rasa text-NealabDarkPink h-screen w-full  "}>
   

            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu} contact={true} /></div>

            <div className="flex flex-col items-center w-full h-4/6 mt-10">
                <img src="../nealab.jpg" alt="nealab" className=" w-3/4 md:w-3/5 lg:w-1/5 rounded-lg" />
                
    <div className="mt-4 text-center">
    <EnquireButton enquireForm={enquireForm} setEnquireForm={setEnquireForm}/>


    </div>
                    <div className="flex-row flex justify-center items-center mt-5">
                        <a href="https://www.instagram.com/neala_makeupartistry/" className="hover:scale-125">
                            {Logo.largeInstagram}
                        </a>
                        <a href="https://www.facebook.com/nealamakeupartistry" className="hover:scale-125">{Logo.largeFacebook}</a>

                        <button className="hover:scale-125">{Logo.email}</button>

                    </div>
                    <p className="mt-3 md:mt-10">nealab.makeup@gmail.com</p>
                </div>
            </div>
            </div>
 
    )
}