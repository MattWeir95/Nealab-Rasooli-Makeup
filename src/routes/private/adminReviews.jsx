import { useState } from "react";
import Header from "../../dashboard-components/Header";
import NewReview from "../../dashboard-components/NewReview";
import ReviewList from "../../dashboard-components/ReviewList";

export default function AdminReviews(){
    const [reload, setReload] = useState();
    return (
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">
        <div className="pt-5 px-5 ">
        <Header />

        </div>
        <div className="flex flex-row justify-around items-center mt-10 h-5/6 w-full">
        <NewReview reload={reload} setReload={setReload} />
        <ReviewList reload={reload} setReload={setReload}/>
        </div>

      
        </div>
    )
}