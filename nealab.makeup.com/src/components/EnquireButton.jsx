
export default function EnquireButton(props) {
    return (
        <div className="">
            <button onClick={() => {

                    
                    props.setEnquireForm(true)

            }} className="p-1 rounded-sm hover:scale-105 bg-NealabDarkPink text-white hover:bg-NealabPink">Enquire</button>
        </div>
    )
}