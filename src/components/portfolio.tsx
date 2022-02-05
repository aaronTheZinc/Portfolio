import React, { useEffect } from "react";
import { blue, yellow } from "../theme";
import { Project } from "../types";
import "./index.css";
interface ProfileDescriptionProps {
  description: string;
  email: string
  links: {
    title: string;
    uri: string;
  }[]
}
interface ProjectViewProps {
  projects: Project[];
}
interface ProjectCardProps {
  project: Project;
  index: number;
}
export const ProfileDescription = ({
  description,
  links,
  email
}: ProfileDescriptionProps): JSX.Element => {
  return (
    <div className="text-white m-10">
      <div>
        <label style={{ color: yellow }} className="text-3xl">
          Who Am I?
        </label>
      </div>
      <div className="mt-10">
        <label className="Courier font-extrabold">{description}</label>
      </div>
      <div className="mt-5">
        <div>
          <label style={{ color: yellow }} className="text-3xl">
            Contact
          </label>
        </div>      <div className="mt-10">
          <label className="Courier font-thin underline">{`Email:  ${email}`}</label>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label style={{ color: yellow }} className="text-3xl">
            Links
          </label>
        </div>
        <div>
          {
            links.map(({ title, uri }, i) => (
              <div className="Courier text-yellow-50">
                <button style={{ color: blue, backgroundColor: "white" }} className="mt-3 p-1 rounded-md
                " onClick={() => window.open(uri)}>{title}</button>
              </div>
            ))

          }
        </div>
      </div>
    </div>
  );
};
const ProjectCard = ({ project, index }: ProjectCardProps) => {

  return (
    <div
      style={{ marginTop: index === 0 ? "0pc" : "3pc" }}
      className="w-4/5 h-1/4 m-10"
    >
      <div
        style={{ borderColor: yellow }}
        className="border-4 overflow-auto scrollbar-hide h-60 mt-9 rounded-lg bg-white flex"
      >
        <div className="p-6 w-2/3">
          <div className="font-bold">
            <label>{project.title}</label>
          </div>
          <div className="mt-6 overflow-auto scrollbar-hide Courier">
            <p className="text-black">{project.description}</p>
          </div>
        </div>
        <div className=" w-1/3">
          <img className=" w-3/4 mt-16" src={project.image} />
        </div>
      </div>
    </div>
  );
};

export const ProfileProjects = ({ projects }: ProjectViewProps) => {
  useEffect(() => {

  }, [])
  return (
    <div>
      <div className="m-10">
        <label style={{ color: yellow }} className="text-3xl">
          Projects
        </label>
      </div>
      <div className="max-h-screen overflow-auto scrollbar-hide">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} project={project} />
        ))}
      </div>
    </div>
  );
};
