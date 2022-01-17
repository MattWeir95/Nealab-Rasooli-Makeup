import { useEffect, useRef, useState } from "react";
import EnquireButton from "../../components/EnquireButton";
import EnquireForm from "../../components/EnquireForm";
import Header from "../../components/Header";
import NavMenu from "../../components/NavMenu";
import { db } from "../../firebase/firebase";

export default function Services() {
  const [menu, setMenu] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [enquireForm, setEnquireForm] = useState(false);

  const enquireFormNode = useRef();
  const enquireButtonNode = useRef();

  const menuNode = useRef();


  useEffect(() => {
    //Event listeners for closing NavMenu & EnquireForm
    document.addEventListener("mousedown", handleClick);

    let data = [];

    db.collection("service-list")
      .get()
      .then((TableData) => {
        TableData.docs.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .then((e) => {
        setServiceList(data);
      });

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
    <div className="">
      <NavMenu node={menuNode} setMenu={setMenu} menu={menu} />
      <EnquireForm
        node={enquireFormNode}
        setEnquireForm={setEnquireForm}
        enquireForm={enquireForm}
      />

      <div
        className={
          menu || enquireForm
          ? "font-Rasa text-NealabDarkPink h-screen w-full opacity-50 transition-opacity ease-in-out duration-1000"
          : "font-Rasa text-NealabDarkPink h-screen w-full opacity-100 transition-opacity ease-in-out duration-1000"
        }
      >
        <div className="pt-5 px-5">
          <Header menu={menu} setMenu={setMenu} />
        </div>

        <div className="block ml-auto mr-auto w-3/4 md:w-3/4 lg:w-1/2 mt-10 h-5/6">
          <div id="portfolio" className="h-5/6 overflow-y-auto px-4">
            {serviceList.map((service, i) => {
              return (
                <div key={i} className="mb-2">
                  <h1 className="text-NealabDarkRed font-semibold">
                    {service.name}
                  </h1>
                  <div className="">
                    {service.items.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-row justify-between border-b text-sm"
                        >
                          <p className="">{item.name}</p>
                          <p className="">${item.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-xl fixed bottom-5 md:bottom-10 lg:bottom-10 left-1/2 -translate-x-1/2">
          <EnquireButton
            node={enquireButtonNode}
            enquireForm={enquireForm}
            setEnquireForm={setEnquireForm}
          />
        </div>
      </div>
    </div>
  );
}
