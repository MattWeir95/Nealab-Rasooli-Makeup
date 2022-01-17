import { useEffect, useRef, useState } from "react";
import EnquireButton from "../../components/EnquireButton";
import EnquireForm from "../../components/EnquireForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import PhotoSlider from "../../components/PhotoSlider";

export default function Homepage() {
  const [menu, setMenu] = useState(false);
  const [enquireForm, setEnquireForm] = useState(false);

  const enquireFormNode = useRef();
  const enquireButtonNode = useRef();

  const menuNode = useRef();

  //Add a mouse down listener to the Homepage component, remove on demount.
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  //Closes Enquireform if clicked on the homepage div, doesnt work if you click on the enquire button.
  const handleClick = (e) => {
    if (
      enquireFormNode.current.contains(e.target) ||
      enquireButtonNode.current.contains(e.target)
    ) {
      return;
    } else {
      setEnquireForm(false);
    }

    if (menuNode.current.contains(e.target)) {
      return;
    } else {
      setMenu(false);
    }
  };

  return (
    <div className="font-Rasa text-NealabDarkPink h-screen w-full ">
    
        <NavMenu node={menuNode} setMenu={setMenu} menu={menu} />
        <EnquireForm
          node={enquireFormNode}
          setEnquireForm={setEnquireForm}
          enquireForm={enquireForm}
        />

        <div className={
          menu || enquireForm
            ? "opacity-50 transition-opacity ease-in-out duration-1000"
            : "opacity-100 transition-opacity ease-in-out duration-1000"
        }>
        <div className="pt-5 px-5">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        <div className="text-center text-4xl pt-20 mx-4 lg:pt-10 md:pt-10">
          Professional Makeup Artist
        </div>
        <div className="z-0 pt-10 mx-5 md:mx-10 lg:mx-10">
          <PhotoSlider enquireForm={enquireForm} />
        </div>

        <div className="flex justify-center items-center  pt-20 text-xl">
          <EnquireButton
            node={enquireButtonNode}
            enquireForm={enquireForm}
            setEnquireForm={setEnquireForm}
          />
        </div>
        <div className="text-center text-sm pt-20">
          <Footer />
        </div>
      </div>
      </div>
  );
}
