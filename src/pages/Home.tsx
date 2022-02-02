import React, { useContext, useEffect, useRef, useState } from "react";
import { blue, yellow } from "../theme";
import {
  ProfileCard,
  ProfileDescription,
  ProfileProjects,
} from "../components";
import { Members } from "../data";
import { AppContext } from "../context";
import FadeIn from "react-fade-in";
import VanillaTilt from "vanilla-tilt";
import { Person } from "../types";
import "./index.css";

export default function Home(): JSX.Element {
  const [person, setPerson] = useState<Person>(Members[0]);
  const ContentViewRef = useRef(null);
  const { member } = useContext(AppContext);
  useEffect(() => {
    VanillaTilt.init(ContentViewRef.current!, {
      scale: 1.0,
      speed: 500,
      max: 10,
    });
  }, []);

  useEffect(() => {
    setPerson(Members.filter((el) => el.id == member)[0]);
  }, [member]);

  return (
    <div className="h-screen" style={{ backgroundColor: yellow }}>
      <div className="md:flex">
        <div className="md:w-1/2 sm:order-2">
          <div className="p-10">
            <FadeIn transitionDuration={1000}>
              {Members.map((p, i) => (
                <ProfileCard key={i} person={p} />
              ))}
            </FadeIn>
          </div>
        </div>
        <div className="md:w-1/2 md:p-10  sm:order-1 overflow-auto">
          <div
            ref={ContentViewRef}
            style={{ backgroundColor: blue }}
            className="h-full w-full"
          >
            <div>
              <div className="p-10">
                <label
                  className={`text-white text-3xl text-center m-5 Courier`}
                >
                  {person.firstName}
                </label>
                <label
                  style={{ color: yellow }}
                  className="text-xl font-thin"
                >{` ~ ${person.major}`}</label>
              </div>
              <div>
                <ProfileDescription description={person.description} />
                <ProfileProjects projects={person.projects} />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
