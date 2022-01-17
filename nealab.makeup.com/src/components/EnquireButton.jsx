
export default function EnquireButton(props) {
    return (
        <div ref={props.node} className="">
            <button onClick={() => {

                        props.setEnquireForm(!props.enquireForm)

            }} className="p-1 rounded-sm hover:scale-105 bg-NealabDarkPink text-white hover:bg-NealabPink">Enquire</button>
        </div>
    )
}