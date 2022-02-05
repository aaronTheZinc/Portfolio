import React, { createRef, useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";
import "./index.css";
import { Person } from "../types";
interface ProfileProps {
  person: Person;
}
//profile card
export const ProfileCard = ({ person }: ProfileProps): JSX.Element => {
  const cardRef = useRef(null);
  const { setMember } = useContext(AppContext);

  return (
    <div
      ref={cardRef}
      onClick={() => setMember(person.id)}
      className="border-2 border-black h-64 mt-5 shadow-2xl  rounded-md hover:scale-105 transition duration-200 ease-in"
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
          <div className="mt-3">
            <span className="text-sm p-1 rounded">
              {person.tools.join(" | ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
