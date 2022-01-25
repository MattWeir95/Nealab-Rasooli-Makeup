import { useState } from "react";
import Header from "../../dashboard-components/Header";
import NewService from "../../dashboard-components/NewService";
import ServiceList from "../../dashboard-components/ServiceList";

export default function AdminServices(){
   
    const [reload, setReload] = useState(false);

    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
            <div className="pt-5 px-5 ">
            <Header />

            </div>

            <div className="flex flex-row justify-between  mt-10 mx-10 h-5/6">
                <NewService reload={reload} setReload={setReload}/>
                <ServiceList reload={reload} setReload={setReload}/>
                
            </div>
            </div>
    )
}