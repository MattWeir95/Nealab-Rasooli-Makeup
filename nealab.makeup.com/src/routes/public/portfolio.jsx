import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";


export default function Portfolio() {
    const [menu, setMenu] = useState(false);
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
    }, []);


    return (
        <div className="">

            <NavMenu  setMenu={setMenu} active={menu} />
            <div className={menu ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50" : "font-Rasa text-NealabDarkPink h-screen w-full  "}>

                <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu} /></div>

                <div className="pt-10 mx-5 h-5/6">
                    <div id="portfolio" className="container mx-auto grid lg:gap-2 lg:grid lg:grid-cols-3 md:gap-1 md:grid md:grid-cols-2  overflow-y-auto h-full px-2">
                        {photos.map((photo, i) => {
                            return (
                                <div key={i} className="w-full rounded hover:shadow-lg hover:cursor-pointer hover:opacity-90 mb-1 ">
                                    <img className="rounded-sm" src={photo.url}
                                        alt={photo.name} />
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

