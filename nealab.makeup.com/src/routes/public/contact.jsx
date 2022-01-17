import { useEffect, useRef, useState } from "react";
import EnquireButton from "../../components/EnquireButton";
import EnquireForm from "../../components/EnquireForm";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import getLogos from "../../resources/Logos";

export default function Contact() {
  const [menu, setMenu] = useState(false);
  const [enquireForm, setEnquireForm] = useState(false);

  var Logo = getLogos();

  const enquireFormNode = useRef();
  const enquireButtonNode = useRef();

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
    }
    setEnquireForm(false);
  };

  return (
    <div className="">
      <NavMenu setMenu={setMenu} menu={menu} />
      <EnquireForm
        node={enquireFormNode}
        setEnquireForm={setEnquireForm}
        enquireForm={enquireForm}
      />
      <div
        className={
          menu || enquireForm
            ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50"
            : "font-Rasa text-NealabDarkPink h-screen w-full  "
        }
      >
        <div className="pt-5 px-5">
          <Header menu={menu} setMenu={setMenu} contact={true} />
        </div>

        <div className="flex flex-col items-center w-full h-4/6 mt-10">
          <img
            src="../nealab.jpg"
            alt="nealab"
            className=" w-3/4 md:w-3/5 lg:w-1/5 rounded-lg"
          />

          <div className="mt-4 text-center">
            <EnquireButton
              node={enquireButtonNode}
              enquireForm={enquireForm}
              setEnquireForm={setEnquireForm}
            />
          </div>
          <div className="flex-row flex justify-center items-center mt-5">
            <a
              href="https://www.instagram.com/neala_makeupartistry/"
              className="hover:scale-125"
            >
              {Logo.largeInstagram}
            </a>
            <a
              href="https://www.facebook.com/nealamakeupartistry"
              className="hover:scale-125"
            >
              {Logo.largeFacebook}
            </a>

            <button className="hover:scale-125">{Logo.email}</button>
          </div>
          <p className="mt-3 md:mt-10">nealab.makeup@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
