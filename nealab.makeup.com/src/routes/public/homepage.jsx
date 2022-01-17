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
    <div className="font-Rasa text-NealabDarkPink h-screen w-full">
    
        <NavMenu node={menuNode} setMenu={setMenu} menu={menu} />
        <EnquireForm
          node={enquireFormNode}
          setEnquireForm={setEnquireForm}
          enquireForm={enquireForm}
        />

        <div className={
          menu || enquireForm
            ? "opacity-50 transition-opacity ease-in-out duration-500 h-full"
            : "opacity-100 transition-opacity ease-in-out duration-500 h-full"
        }>
        <div className="pt-5 px-5 ">
          <Header menu={menu} setMenu={setMenu} />
          
        </div>
        <div className="flex flex-col items-center justify-center w-full h-4/6 ">
        <p className="text-3xl text-center lg:text-5xl">Professional Makeup Artist</p>
        <div className="pt-5 z-0 h-4/6 w-5/6">
          <PhotoSlider enquireForm={enquireForm} />
        </div>
        
        
        

        </div>
        <div className="text-center py-5">
          <div className="mt-2 "><EnquireButton
            node={enquireButtonNode}
            enquireForm={enquireForm}
            setEnquireForm={setEnquireForm}
          /></div>
        <Footer />

        </div>
        </div>
      

          
      </div>
  );
}
