import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { DeleteReview } from "../firebase/storeReview";
import getLogos from "../resources/Logos";
export default function ReviewList(props){
    const [reviews,setReviews] = useState();
    var Logos = getLogos();
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

    }, [props.reload]);
    return (
   
        
           
                    <div id="reviews" className="flex flex-row flex-wrap justify-center h-5/6 overflow-y-auto overflow-x-hidden w-3/4 mr-5">
                        
                       
                        {reviews ? reviews.map((review, i) => {
    return( 
        <div key={i} className="mx-1 hover:opacity-70">
            <button onClick={() => {
                DeleteReview(review.key)
                .then(() => {
                    props.setReload(!props.reload)
                })
            }} className="flex items-center justify-center w-full text-NealabDarkRed py-1 hover:bg-red-400"> 
            <div className="hover:scale-125">
         {Logos.cross}

            </div>
            </button>

         <iframe title={review.key} src={review.iFrame} width="340" height="350" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
            )
        }): null}
                        
                    </div>
           )
}



