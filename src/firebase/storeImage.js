import { storage, db } from "./firebase";


export default async function StoreImage(image,name){
    var ref = "";
    if(image && name){
        await storage.ref(name).put(image)
        .then(() => {
            console.log("")
        })
        await storage.refFromURL("gs://nealab-makeup.appspot.com/" +name).getDownloadURL()
        .then((url) => {
            ref = url;
        })
        StoreImageUrl(ref, name)
    }

}

export async function StoreImageUrl(url, name){
    await db.collection("photos").doc(name).set({url: url, name: name})
}

export async function DeletePhoto(name) {


    if(name){
        var imageRef = storage.refFromURL("gs://nealab-makeup.appspot.com/" + name)
    
        imageRef.delete()
        .then(()=> {
            
        }).catch((error) => {
            console.log(error);
        })

        db.collection("photos").doc(name).delete().then(() => {
            
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
      
    }
    
}
