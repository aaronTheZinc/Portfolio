import React from "react";
import { yellow } from "../theme";
import { ProfileCard } from "../components";
import { Members } from "../data";
import FadeIn from "react-fade-in";
export default function Home(): JSX.Element {
  return (
    <div className="h-screen" style={{ backgroundColor: yellow }}>
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="p-10">
            <FadeIn transitionDuration={1000}>
              {Members.map((p) => (
                <ProfileCard person={p} />
              ))}
            </FadeIn>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <div className="h-full w-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}
