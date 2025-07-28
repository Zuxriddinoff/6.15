import React, { useState } from "react";
import image from "../../assets/image1.png";
import { Project } from "../static";
import Popup from "../ui/popup";

function Main() {
  const [activeId, setActiveId] = useState(null);
  const handleshow = (id) => setActiveId(id);
  const handleClose = () => setActiveId(null);

  return (
    <section>
      <div className="container mt-[120px]">
        <h3 className="text-[17px]">PROJECTS</h3>
        <div className="h-[2513px] grid grid-cols-2 gap-10 mt-10 max-lg:grid-cols-1">
          {Project?.map((item) => (
            <div key={item.id}>
              <div className="w-full h-[400px] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                  onClick={() => handleshow(item.id)}
                />
              </div>
              <p className="text-2xl text-black font-medium pt-[18px]">
                {item.title}
              </p>
              {activeId === item.id && (
                <Popup>
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className=" object-contain rounded-xl"
                      onClick={handleClose}
                    />
                  </div>
                </Popup>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
