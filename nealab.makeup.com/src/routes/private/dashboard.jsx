import BookingTable from "../../dashboard-components/BookingTable";
import Header from "../../dashboard-components/Header";

export default function Dashboard(){
    return (

        
        <div className="font-Rasa text-NealabDarkPink h-screen w-full">


  
<div className="pt-5 px-5 ">
            <Header />

            </div>

<div className="w-full h-5/6 hidden md:block lg:block">
<BookingTable />

</div>
<div className="flex justify-center items-center mt-20 md:hidden lg:hidden" >
                <p className="text-NealabDarkRed">This feature is only available on desktop.</p>
            </div>
</div>
            

    )
}