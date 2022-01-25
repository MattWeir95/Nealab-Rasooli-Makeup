import { useEffect, useState } from "react";
import getLogos from "../resources/Logos";
import StoreImage from "../firebase/storeImage";



export default function NewPhoto(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState();

    let Logos = getLogos();

    useEffect(() => {

    },[])

    return (
        <div className="h-full border border-NealabDarkRed shadow-xl rounded w-1/2">
            <h1 className="text-center mt-2">Add New Photo</h1>

        {/* New Photo */}
            <div className="text-black flex flex-col w-full px-5 mt-10">
                <div className="border p-5 shadow rounded">
                <p className="text-red-400 text-center mb-4">Photos need to be 1200x1200 px</p>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                        <label htmlFor="name">Name:</label>
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }} id="name" type="text" className="ml-5 border-NealabDarkRed border rounded" />
                        </div>
                        
                        
                    </div>
                

                 
                    <div className="flex flex-row justify-between mt-5">
                        <div className="flex flex-row">
                        <label htmlFor="link" className="flex justify-center items-center">Upload:</label>
                        <input onChange={(e)=>{setImage(e.target.files[0])}} id="link" type="file" className="ml-3 border-NealabDarkRed  mr-3" />
                        </div>
                        
                        <button onClick={() => {
    
                            StoreImage(image, name)
                            .then(() => {
                                setInterval(200);
                                ClearField("name");
                                ClearField("link");
                                props.setReload(!props.reload);
                            })

                    
                        }} className="flex justify-center items-center hover:scale-110">{Logos.add} </button>
                    </div>
                
                        </div>


            </div>
        </div>
    )
}

function ClearField(id){
    document.getElementById(id).value="";

}