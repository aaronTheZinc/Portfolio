import React from "react";
import { yellow } from "../theme";
import { Project } from "../types";
import "./index.css";
interface ProfileDescriptionProps {
  description: string;
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
        className="border-2 h-60 mt-9 rounded-lg bg-white flex"
      >
        <div className="p-6 w-1/2">
          <div className="font-bold">
            <label>{project.title}</label>
          </div>
          <div className="mt-6 Courier">
            <p>{project.desription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileProjects = ({ projects }: ProjectViewProps) => {
  return (
    <div>
      <div className="m-10">
        <label style={{ color: yellow }} className="text-3xl">
          Projects
        </label>
      </div>
      <div className="overflow-auto">
        {projects.map((project, i) => (
          <ProjectCard index={i} project={project} />
        ))}
      </div>
    </div>
  );
};
