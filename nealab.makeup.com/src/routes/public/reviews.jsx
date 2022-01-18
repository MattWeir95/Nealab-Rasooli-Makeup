import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";
import getLogos from "../../resources/Logos";
export default function Reviews() {
  const [menu, setMenu] = useState(false);
  const [reviews, setReviews] = useState();

  const menuNode = useRef();

  var Logo = getLogos();

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
        <div className="pt-5 px-5">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        {/* Page div */}
        <div id="reviews" className="flex flex-col w-full h-5/6 mt-4  lg:flex-row lg:flex-wrap lg:flex overflow-y-auto">
          {reviews
            ? reviews.map((review, i) => {
                return (
                  <div key={i} className="flex flex-row w-full h-3/4 lg:h-1/3 mt-4 justify-center items-center lg:w-1/3">
                    <div className="bg-NealabLightPurple h-full w-full rounded mx-4 flex justify-center items-center my-2">
                      <div className="flex-col  flex items-center justify-center  md:flex-row lg:flex-row md:justify-between lg:justify-between ">
                      {review.photo !== "no-photo" ? <img
                          src={review.photo}
                          alt={review.name}
                          className="w-1/5 md:w-1/6 lg:w-1/4 rounded-full mt-1 md:ml-2 lg:ml-2 "
                        /> : null}
                        <div className="mx-2 flex flex-col justify-center items-center lg:mb-7">
                          <p className="font-bold text-center mt-2 text-sm">
                            {review.name}
                          </p>
                          <div className="text-center text-xs shadow-xl bg-NealabPink text-white rounded p-2 mt-1">
                            <div className="flex flex-row justify-between">
                              {Logo.quote}
                              {Logo.quoteReversed}
                            </div>
                            {review.text}
                            <p className="text-left text-xs mt-1">{review.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
