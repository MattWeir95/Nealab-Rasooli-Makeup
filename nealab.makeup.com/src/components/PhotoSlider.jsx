import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PhotoSlider(){


  return (
    <Carousel
  swipeable={true}
  draggable={true}
  responsive={responsive}
  infinite={true}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  centerMode={true}
>

{PortfolioPhotos.map((photo) => {
    return (
<img src={photo.link} alt={photo.name} className="px-2 max-h-1/2" />

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


  var PortfolioPhotos = [{
    name: "watch",
    link: "../photos/mckenzie.png"
},  {
    name: "watch",
    link: "../photos/nealab_lashes.png"
}, {
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
}, {
    name: "watch",
    link: "../photos/mckenzie.png"
},  {
    name: "watch",
    link: "../photos/nealab_lashes.png"
}, {
    name: "watch",
    link: "../photos/mckenzie.png"
}, {
    name: "watch",
    link: "../photos/nealab_lashes.png"
},]