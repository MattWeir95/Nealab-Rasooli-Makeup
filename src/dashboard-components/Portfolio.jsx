import { useEffect, useState } from "react"
import { db } from "../firebase/firebase";
import { DeletePhoto } from "../firebase/storeImage";
import getLogos from "../resources/Logos";

export default function Portfolio(props) {
    var Logos = getLogos();
    const [photos, setPhotos] = useState([])
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
    },[props.reload])

    return (
        <div id="portfolio" className="ml-4 container mx-auto grid lg:gap-2 lg:grid lg:grid-cols-3 md:gap-1 md:grid md:grid-cols-2  overflow-y-auto h-full px-2">
                {photos.map((photo, i) => {
                    return (
                        <div key={i} className="w-full rounded hover:shadow-lg hover:opacity-70 ">
                            <img className="rounded-sm" src={photo.url}
                                alt={photo.name} />
                                <div className="flex justify-center items-center hover:cursor-pointer hover:bg-red-400"><button onClick={()=> {
                                    DeletePhoto(photo.name)
                                    .then(() => {
                                        setInterval(200);
                                        props.setReload(!props.reload)
                                    })
                                }} className="py-1 text-NealabDarkRed hover:scale-125 ">{Logos.cross}</button></div>
                                
                        </div>
                    )
                })}

            </div>
    )
}