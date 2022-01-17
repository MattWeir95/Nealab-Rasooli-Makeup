import { db } from "./firebase";


export async function storeReview(iFrame){

    var key=  Math.floor(Math.random() * 10000).toString();
    
    if(iFrame){
        db.collection("reviews").doc(key).set({iFrame: iFrame, key: key});
    }

    
}


export async function DeleteReview(key){
    db.collection("reviews").doc(key).delete();
}