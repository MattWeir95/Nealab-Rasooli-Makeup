import React from "react"
import { db } from "../firebase"


export default function storeData(name, email, date, bookingSize, description){

    if(!description){
        description= ""
    }

    date = date.toDateString();

    
    db.collection('bookings').add({
        name: name,
        email: email,
        date: date,
        bookingSize: bookingSize,
        description: description,
                
    })
}