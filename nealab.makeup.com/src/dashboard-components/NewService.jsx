import { useEffect, useState } from "react";
import { storeHeading, storeItem } from "../firebase/storeService";
import { db } from "../firebase/firebase";
import getLogos from "../resources/Logos";



export default function NewService(props) {
    const [headerInput, setHeaderInput] = useState("");
    const [serviceList, setServiceList] = useState([]);
    const [headingSelection, setHeadingSelection] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");


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

    return (
        <div className="h-full border border-NealabDarkRed shadow-xl rounded w-1/2">
            <h1 className="text-center mt-2">Add New Service</h1>

        {/* New Heading */}
            <div className="text-black flex flex-col w-full px-5 mt-10">
                <div className="border p-5 shadow rounded">
                    <label htmlFor="heading" className="text-xl ">Heading</label>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                        <label htmlFor="heading">Name:</label>
                        <input onChange={(e) => {
                            setHeaderInput(e.target.value);
                        }} id="heading" type="text" className="ml-5 border-NealabDarkRed border rounded" />
                        </div>
                        
                        <button onClick={() => {
    
                            storeHeading(headerInput)
                            .then(() => {
                                ClearField("heading");
                                props.setReload(!props.reload);

                            })
                        }} className="flex justify-center items-center hover:scale-110">{Logos.add} </button>
                    </div>
                </div>

{/* New Service */}
                <div className=" mt-5 border p-5 shadow rounded">
                    <p className="text-xl">Service</p>
                    <label htmlFor="heading-select">Select Heading: </label>
                    <select onChange={(e) => {
                        setHeadingSelection(e.target.value);
                    }} name="heading-select" id="heading-select" className="ml-1 border border-NealabDarkRed rounded w-1/4 py-1">
                        <option></option>

                        {serviceList.map((service, i) => {
                            return (
                                <option key={i} value={service.name}>{service.name}</option>

                            )
                        })}
                    </select>
                    <div className="flex flex-col">

                        <div className="flex flex-row mt-5">

                            <label htmlFor="name">Name:</label>
                            <input onChange={(e) => {
                                setItemName(e.target.value);
                            }} id="name" type="text" className="ml-5 border-NealabDarkRed border rounded" />


                        </div>
                        
                        <div className="flex flex-row justify-between mt-5">
                            <div className="">
                            <label htmlFor="price">Price:</label>
                            <input onChange={(e) => {
                                setItemPrice(e.target.value);
                            }} id="price" type="text" className="ml-6 border-NealabDarkRed border rounded" />

                            </div>
                            
<button onClick={() => {
                        storeItem(headingSelection, itemName, itemPrice)
                        .then(() => {
                            ClearField("heading-select");
                            ClearField("name");
                            ClearField("price");

                            props.setReload(!props.reload);
                        })

                    }} className="flex justify-center items-center hover:scale-110"> {Logos.add} </button>
                        </div>
                    </div>

                   
                </div>


            </div>
        </div>
    )
}

function ClearField(id){
    document.getElementById(id).value="";

}