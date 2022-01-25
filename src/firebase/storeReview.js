import { db } from "./firebase";


export async function storeReview(name, date, text, photo){

 
    var key = Math.floor(Math.random() * 100000).toString();

    if(name && date && text){
        var stringDate = date.toString();

        if(photo){
            db.collection("reviews").doc(key).set({date: stringDate, name: name, text: text, photo: photo, key: key});

        }else{
            db.collection("reviews").doc(key).set({date: stringDate, name: name, text: text, photo: "no-photo", key: key});

        }

    }

    
}


export async function DeleteReview(key){
    db.collection("reviews").doc(key).delete();
}