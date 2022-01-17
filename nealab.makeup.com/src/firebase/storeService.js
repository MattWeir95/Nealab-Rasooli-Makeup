import { db } from "./firebase"
import firebase from 'firebase/compat/app';


export async function storeHeading(name){
    
    if(name){
        db.collection("service-list").doc(name).set({name: name, items:[]});

    }

    
}

export async function storeItem(heading, name, price){
    
        console.log(heading, name, price);
       if(heading && name && price ){
        var dbRef = db.collection("service-list").doc(heading);

        return dbRef.update({
            items: firebase.firestore.FieldValue.arrayUnion({name: name, price: price})
        })
        .then(() => {
            console.log("add succ")
        })
        .catch((error) => {
            console.log(error)
        })
       }else{
           console.log("Missing input")
       }
       
     
        
        
    
}