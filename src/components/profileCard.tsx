import React, { createRef, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { yellow } from "../theme";
import "./index.css";
export interface Person {
  firstName: string;
  lastName: string;
  skills: string[];
  profileImage: string;
}
interface ProfileProps {
  person: Person;
}
const options = {
  scale: 1.0,
  speed: 500,
  max: 30,
};

//profile card
export const ProfileCard = ({ person }: ProfileProps): JSX.Element => {
  const cardRef = useRef(null);

  useEffect(() => {
    //VanillaTilt.init(cardRef.current!, options);
  }, []);
  return (
    <div
      ref={cardRef}
      className="border-2 border-black h-48 mt-5 shadow-2xl  rounded-md hover:scale-105 transition duration-200 ease-in"
    >
      <div className="flex">
        <div className="mt-12 m-6" style={{ width: "30%", height: "100%" }}>
          <img
            className=" h-24 w-24 rounded-full"
            src={
              "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
            }
          />
        </div>
        <div className="mt-11">
          <label className="text-2xl font-bold Courier">{`${person.firstName} ${person.lastName}`}</label>
          <div>
            <span className=""> {person.skills.join(",")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
