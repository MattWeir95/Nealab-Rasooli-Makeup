import { db } from "./firebase"
import firebase from 'firebase/compat/app';


export async function deleteHeading(name) {

    if (name) {
        db.collection("service-list").doc(name).delete()
            .catch((error) => {
                console.error("Error removing document: ", error);
            });

    }


}

export async function deleteItem(heading, name, price) {

    console.log(heading, name, price);
    if (heading && name && price) {
        var dbRef = db.collection("service-list").doc(heading);

        return dbRef.update({
            items: firebase.firestore.FieldValue.arrayRemove({ name: name, price: price })
        })
            .then(() => {
                console.log("delete succ")
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        console.log("Missing input")
    }





}