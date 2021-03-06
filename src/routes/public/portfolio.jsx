import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [photos, setPhotos] = useState([]);


  const menuNode = useRef();


  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

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

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
  }, []);


  const handleClick = (e) => {
    

    if (menuNode.current.contains(e.target)) {
      return;
    } else {
      setMenu(false);
    }
  };

  return (
    <div className="font-Rasa text-NealabDarkPink h-customHeight w-full overflow-y-hidden">
        <NavMenu node={menuNode} setMenu={setMenu} menu={menu} />
   
      <div
      className={
        menu
        ? "opacity-50 transition-opacity ease-in-out duration-500 h-full"
        : "opacity-100 transition-opacity ease-in-out duration-500 h-full"
      }
        >
      
          <div className="pt-5 px-5">
            <Header menu={menu} setMenu={setMenu} />
          </div>
          <div className="pt-10 mx-5 h-full">
            <div
              id="portfolio"
              className="container mx-auto grid lg:gap-2 lg:grid lg:grid-cols-3 md:gap-1 md:grid md:grid-cols-2  h-5/6 overflow-y-auto px-2"
            >
              {photos.map((photo, i) => {
                return (
                  <div
                    key={i}
                    className="w-full rounded hover:shadow-lg hover:cursor-pointer hover:opacity-90 mb-1 "
                  >
                    <img
                      className="rounded-sm"
                      src={photo.url}
                      alt={photo.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
