import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";
export default function Reviews(){
    const [menu, setMenu] = useState(false);
    const [reviews,setReviews] = useState();
    useEffect(() => {
        let data = [];
        db.collection("reviews")
            .get()
            .then((ReviewData) => {
                ReviewData.docs.forEach((doc) => {
                    data.push(doc.data());
                });
            })
            .then((e) => {
                setReviews(data);
            });

    }, []);


    
    return (


        <div className="">

        <NavMenu  setMenu={setMenu} active={menu}/>
        <div className={menu  ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50" : "font-Rasa text-NealabDarkPink h-screen w-full  "}>

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="LoyPs2Dr"></script>

    
            <div className="pt-5 px-5"><Header menu={menu} setMenu={setMenu}/></div>
            <div id="reviews" className="flex flex-row flex-wrap mt-10 justify-center h-5/6 mx-1 overflow-y-auto overflow-x-hidden">
            {reviews ? reviews.map((review, i) => {
    return( 
        <div key={i} className="mx-4">
            

         <iframe title={review.key} src={review.iFrame} width="335" height="350" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
            )
        }): null}
            </div>
        </div>
        </div>
    )
}