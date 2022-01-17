import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { db } from "../firebase/firebase";
export default function PhotoSlider(props){
  const [photos, setPhotos] = useState([])


  useEffect(() => {
      let data = [];

      db.collection("photos")
          .get()
          .then((PhotoData) => {
              PhotoData.docs.forEach((doc) => {
                  data.push(doc.data());
              });
          })
          .then((e) => {
              setPhotos(data);
            
          });
  }, []);

  return (
    <Carousel
    arrows={props.enquireForm ? false : true}
  swipeable={false}
  draggable={false}
  responsive={responsive}
  infinite={true}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  centerMode={true}
  
>

{photos.map((photo, i) => {
    return (
<img key={i} src={photo.url} alt={photo.name} className="px-2 max-h-1/2" />

    )
})}
</Carousel>
  )
};




const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    }
  };


  