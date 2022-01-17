import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";
export default function Reviews() {
  const [menu, setMenu] = useState(false);
  const [reviews, setReviews] = useState();

  const menuNode = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    let data = [];
    db.collection("reviews")
      .get()
      .then((ReviewData) => {
        ReviewData.docs.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .then((e) => {
        setReviews(data);
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
    <div className="font-Rasa text-NealabDarkPink h-screen w-full">
        <NavMenu node={menuNode} setMenu={setMenu} menu={menu} />

      <div
      className={
        menu
          ? "opacity-50 transition-opacity ease-in-out duration-500 h-full"
          : "opacity-100 transition-opacity ease-in-out duration-500 h-full"
      }
        >
      
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
            nonce="LoyPs2Dr"
          ></script>
          <div className="pt-5 px-5">
            <Header menu={menu} setMenu={setMenu} />
          </div>
          <div
            id="reviews"
            className="flex flex-row flex-wrap mt-10 justify-center h-5/6 mx-1 overflow-y-auto overflow-x-hidden"
          >
            {reviews
              ? reviews.map((review, i) => {
                  return (
                    <div key={i} className="mx-4">
                      <iframe
                        title={review.key}
                        src={review.iFrame}
                        width="335"
                        height="350"
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
    </div>
  );
}
