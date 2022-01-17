import { useState } from "react";
import { NavLink } from "react-router-dom";
import getLogos from "../resources/Logos";
import { SendEmail } from "../emailJS/sendEmail";

export default function EnquireForm(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState();

    let Logo = getLogos();

    var active = props.enquireForm;

    function HandleSubmit(e){
        e.preventDefault();
        SendEmail(name, email, note);
    }


    return (
        <div ref={props.node} className={active? "font-Rasa fixed z-10 w-3/4 md:w-1/2 lg:w-1/4 h-screen bg-NealabPink transition ease-in-out right-0" : "font-Rasa fixed z-10 w-3/4 md:w-1/2 lg:w-1/4 h-screen md:translate-x-full right-0 lg:translate-x-full bg-NealabPink translate-x-full transition ease-in-out"}>
        <div className="flex flex-col text-white text-lg mt-5 ml-4">
        <div className="flex flex-row justify-around">
        <NavLink className="whitespace-nowrap text-3xl hover:font-bold hover:cursor-pointer mb-10" to="/">Nealab Rasooli</NavLink>
        <button onClick={() => {
            props.setEnquireForm(!props.enquireForm)
        }} className="mb-10 text-whit mr-5">{Logo.cross}</button>
        </div>

        
       <div className="">
           <form onSubmit={HandleSubmit} action="" className="flex flex-col w-3/4 ml-5 text-black">
               <label htmlFor="name" className="my-2 text-white">Name</label>
               <input onChange={(e)=> {
                   setName(e.target.value)
               }} id="name" type="text" className="rounded border border-NealabPink" required/>

               <label htmlFor="email" className="my-2 text-white">Email</label>
               <input onChange={(e)=> {
                   setEmail(e.target.value)
               }} id="email" type="email" className="rounded border border-NealabPink" required/>

               <label htmlFor="notes" className="my-2 text-white">Notes</label>
               <textarea onChange={(e)=> {
                   setNote(e.target.value)
               }} id="notes" type="text" className="rounded border border-NealabPink" required> </textarea>

<div className="mt-4 flex justify-center items-center">
<button  type="submit" className="text-center text-white border px-2 pt-1 rounded hover:text-NealabPink hover:scale-105 hover:border-NealabPink hover:bg-white">Send</button>

</div>
           </form>

       </div>


</div>
    </div>
    )
}