import { useState } from "react";
import Header from "../../dashboard-components/Header";
import NewPhoto from "../../dashboard-components/NewPhoto";
import Portfolio from "../../dashboard-components/Portfolio";

export default function AdminPortfolio(){
    const [reload, setReload] = useState();


    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
            <div className="pt-5 px-5 ">
            <Header />

            </div>
            <div className="flex flex-row justify-between  mt-10 mx-10 h-5/6">
         
            <NewPhoto  reload={reload} setReload={setReload}/>
            <Portfolio  reload={reload} setReload={setReload}/>
                
            </div>
            </div>
    )
}


