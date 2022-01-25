import {send} from "emailjs-com";
import StoreBooking from "../firebase/storeBooking";
const bookingTemplate = "template_om6sgs9";
const confirmationTemplate = "template_jf0klww"
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;

export function SendEmail(name, email, message){

    if(name && email && message){
        
    StoreBooking(name, email, message);

    let BookingParams = {
        name: name,
        email:email,
        message: message,
    }

    send(SERVICE_ID,bookingTemplate , BookingParams,USER_ID)
    .then(()=>{
        send(SERVICE_ID,confirmationTemplate, BookingParams,USER_ID)
        .then(() => {
            console.log("Success")
        })
    })
}
}
