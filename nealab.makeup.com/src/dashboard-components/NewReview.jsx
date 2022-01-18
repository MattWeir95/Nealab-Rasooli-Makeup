import { useEffect, useState } from "react";
import getLogos from "../resources/Logos";
import { storeReview } from "../firebase/storeReview";
import { db } from "../firebase/firebase";


export default function NewReview(props) {

    const [text, setText] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();

    const [photos, setPhotos] = useState();
    let Logos = getLogos();

    useEffect(() => {
        let data = [];

        db.collection("photos")
            .get()
            .then((PhotoData) => {
                PhotoData.docs.forEach((doc) => {
                    data.push(doc.data());
                });
            })
            .then((e) => {
                setPhotos(data);
            });
    }, [props.reload])

    return (
        <div className="ml-5 border border-NealabDarkRed shadow-xl rounded w-1/2 h-5/6 ">
            <h1 className="text-center mt-2">Add New Review</h1>

            {/* New Photo */}
                        <form onSubmit={(e) => {
                        e.preventDefault();
                        storeReview(name, date, text, image)
                        .then(() => {
                            props.setReload(!props.reload);
                            ClearField("name");
                            ClearField("date")
                            ClearField("text")
                            ClearField("photo-select")
                        })

                    }} className="flex flex-col ml-2"> 
                        <label htmlFor="name" className="mt-2 font-bold">Name:</label>
                        <input required onChange={(e) => {
                            setName(e.target.value)
                        } } type="text" id="name" className="rounded border border-NealabDarkRed w-3/4" />
                        <label htmlFor="date" className="mt-2 font-bold">Date:</label>
                        <input required onChange={(e) => {
                            setDate(e.target.value)
                        } } type="date" id="date" className="rounded border border-NealabDarkRed w-3/4" />
     
                        <label htmlFor="text" className="mt-2 font-bold">Text:</label>
                        <div className="flex flex-row justify-between">
                        <textarea onChange={(e) => {
                            setText(e.target.value)
                        }} id="text" type="text" className="rounded border border-NealabDarkRed w-3/4" required></textarea>
               
                        </div>
                        <label htmlFor="photo-select" className="font-bold mt-2">Select portfolio photo: </label>
                    <select onChange={(e) => {
                                    setImage(e.target.value)
                                }} name="photo-select" id="photo-select" className="border border-NealabDarkRed rounded w-3/4 py-1">
                        <option></option>

                        {photos ? photos.map((photo, i) => {
                            return (
                                <option key={i} value={photo.url}>{photo.name}</option>

                            )
                        }) : null}
                    </select>
                    <button  className="mt-2"> {Logos.add} </button>
                    </form>



        </div>
    )
}

function ClearField(id) {
    document.getElementById(id).value = "";

}
