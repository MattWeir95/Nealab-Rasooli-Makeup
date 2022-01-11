import { useState } from "react";
import EnquireButton from "../components/EnquireButton";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

export default function Services() {
    const [menu, setMenu] = useState(false);

    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
            <NavMenu setMenu={setMenu} active={menu}/>
            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>

<div className="block ml-auto mr-auto w-3/4 md:w-3/4 lg:w-1/2 mt-10 h-5/6">
<div className="h-5/6 overflow-y-scroll px-4">
            {ServicesList.services.map((service) => {
                return (
                    <div className="mb-2">
                        <h1 className="text-NealabDarkRed font-semibold">{service.name}</h1>
                        <div className="">
                            {service.items.map((item) => {
                                return (
                                    <div className="flex flex-row justify-between border-b text-sm">
                                        <p className="">{item.name}</p>
                                        <p className="">${item.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            </div>
            </div>
            <div className="text-xl fixed bottom-5 md:bottom-10 lg:bottom-10 left-1/2 -translate-x-1/2">
                <EnquireButton />

            </div>
        </div>
    )
}



var ServicesList =
{
    services: [
        {
            name: "Makeup",
            items: [{
                name: "Full Glam",
                price: 100
            }, 
        {
            name: "Soft Glam",
            price: 100
        }]
        },
        {
            name: "Hairstyling",
            items: [{
                name: "Basic Hairstyling",
                price: 100
            }]
        },
        {
            name: "Lashes",
            items: [{
                name: "Basic Lashes",
                price: 100
            }]
        },
        {
            name:"Brows",
            items : [{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },{
                name: "Brow Tinting",
                price: 100
            },
            
            {
                name: "Brow Lamination",
                price: 100
            },
            {
                name: "Brow Sculpting",
                price: 100
            },
            ]
        },
        {
            name: "Callout",
            items: [{
                name: "Brisbane",
                price: 100
            },
                {
                name: "Sunshine Coast",
                price: 100
            },
        {
            name: "Gold Coast",
            price: 100
        }]
        }
    ]



}


