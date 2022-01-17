import { useEffect, useState } from "react";
import getLogos from "../resources/Logos";
import { storeReview } from "../firebase/storeReview";



export default function NewReview(props) {

    const [iFrame, setIframe] = useState();

    let Logos = getLogos();

    useEffect(() => {

    }, [props.reload])

    return (
        <div className="ml-5 border border-NealabDarkRed shadow-xl rounded w-1/4 h-5/6 ">
            <h1 className="text-center mt-2">Add New Review</h1>

            {/* New Photo */}
                        <div className="flex flex-col ml-2">
                            <p className="font-bold">To add new new review:</p>
                            <p className="">Go to a facebook review, press the three dots, click embed.</p>
                            <p className="">Copy just the src within the quotations</p>
                            <p className="">Should end in width=500</p>
                         <p className="">Paste it within the field below</p>
                        <label htmlFor="iFrame" className="my-2 font-bold">Paste iFrame src:</label>

                        <div className="flex flex-row justify-between">
                        <textarea onChange={(e) => {
                            setIframe(e.target.value)
                        }} id="iFrame" type="text" className="rounded border border-NealabDarkRed" required></textarea>
               <button onClick={() => {
                   storeReview(iFrame)
                   .then(() => {
                       ClearField("iFrame")
                       props.setReload(!props.reload)
                   })
               }} className="mr-2">{Logos.add}</button>
                        </div>
               
                </div>
                         <p className="mt-5 mx-2">If the review is not visible, delete it and copy paste the src correctly.</p>



        </div>
    )
}

function ClearField(id) {
    document.getElementById(id).value = "";

}