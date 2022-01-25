import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import getLogos from "../resources/Logos";
import { deleteHeading, deleteItem } from "../firebase/deleteServices";


export default function ServiceList(props){
    const [serviceList, setServiceList] = useState([]);


    let Logos = getLogos();
    useEffect(() => {

       

        let data = [];

        db.collection("service-list")
            .get()
            .then((TableData) => {
                TableData.docs.forEach((doc) => {
                    data.push(doc.data());
                });
            })
            .then((e) => {
                setServiceList(data);
            });

          


    }, [props.reload]);
    return(
        <div className="lg:w-2/5 border border-NealabDarkRed shadow-xl rounded ">
                    <div id="portfolio" className="h-5/6 overflow-y-auto mt-10 px-4">


                        {serviceList.map((service, i) => {
                            return (
                                <div key={i} className="mb-2">
                                    <div className="flex flex-row justify-between">
                                    <h1 className="text-NealabDarkRed font-semibold">{service.name}</h1>
                                    <button onClick={() => {
                                        deleteHeading(service.name)
                                        .then(() => {
                                            props.setReload(!props.reload);
                                        })

                                    }} className="text-red-600 hover:scale-110">{Logos.cross}</button>
                                    </div>
                                    <div className="">
                                        {service.items && service.items.map((item, i) => {
                                            return (
                                                <div key={i} className="flex flex-row justify-between border-b text-sm">
                                                    <p className="">{item.name}</p>
                                                    <div className="flex flex-row">
                                                    <p className="">${item.price}</p>
                                    <button onClick={() => {
                                        deleteItem(service.name, item.name, item.price)
                                        .then(() => {
                                            props.setReload(!props.reload)
                                        })


                                    }} className="text-red-600 hover:scale-110 ml-1">{Logos.cross}</button>
                                                    </div>
                              

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

    )
}