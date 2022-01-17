import { db } from "./firebase"


export default function StoreBooking(name, email, message){
    
    db.collection('bookings').add({
        name: name,
        email: email,
        message: message,
                
    })
}