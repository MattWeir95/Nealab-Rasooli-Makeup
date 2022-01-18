import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { DeleteReview } from "../firebase/storeReview";
import getLogos from "../resources/Logos";
export default function ReviewList(props){
    const [reviews,setReviews] = useState();
    var Logo = getLogos();
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
   
        
           
                    <div id="reviews" className="border border-black overflow-y-auto h-5/6 w-1/2 mx-2 rounded shadow flex flex-wrap items-center justify-center">
                        
                        {reviews
            ? reviews.map((review, i) => {
                return (
                  <div key={i} className="flex flex-col items-center justify-center w-full h-1/3 lg:h-1/2  lg:w-1/3 my-4 mx-2 ">

                    <div className="bg-NealabLightPurple h-full w-full  mx-4 flex justify-center items-center">
                      <div className="flex-col flex items-center justify-center">
                    {review.photo !== "no-photo" ? <img
                          src={review.photo}
                          alt={review.name}
                          className="w-1/3 rounded-full mt-2"
                        /> : null}
                        
                        <div className="mx-2 flex flex-col justify-center items-center ">
                          <p className="font-bold text-center mt-2 text-sm">
                            {review.name}
                          </p>
                          <div className="text-center text-xs shadow-xl bg-NealabPink text-white rounded p-2 mb-2">
                            <div className="flex flex-row justify-between">
                              {Logo.quote}
                              {Logo.quoteReversed}
                            </div>
                            {review.text}
                            <p className="text-left text-xs mt-1">{review.date}</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <button onClick={() => {
                      DeleteReview(review.key)
                      .then(() => {
                        props.setReload(!props.reload)
                      })
                    }} className=" w-full bg-red-400 flex justify-center text-black py-1">{Logo.cross} </button>

                  </div>
                );
              })
            : null}
         
                       
                        
                        
                    </div>
           )
}



