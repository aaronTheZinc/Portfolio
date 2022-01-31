import React, { createRef, useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";
import "./index.css";
export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  skills: string[];
  profileImage: string;
  tools: string[];
  description: string;
  major: string;
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
  const { setMember } = useContext(AppContext);

  return (
    <div
      ref={cardRef}
      onClick={() => setMember(person.id)}
      className="border-2 border-black h-48 mt-5 shadow-2xl  rounded-md hover:scale-105 transition duration-200 ease-in"
    >
      <div className="flex">
        <div className="mt-7 m-6 " style={{ width: "30%", height: "100%" }}>
          <img className="h-32 w-24 rounded-xl" src={person.profileImage} />
        </div>
        <div className="mt-11">
          <div className="flex w-full right-0">
            <div>
              <label className="text-2xl font-bold Courier">{`${person.firstName} ${person.lastName}`}</label>
            </div>
          </div>
          <div className="mt-5">
            <span className=""> {person.skills.join(",")}</span>
          </div>
          <div className="">
            <span className="text-sm">{person.tools.join(" | ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
