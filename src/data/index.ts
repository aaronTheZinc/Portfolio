import { Person } from "../types";
import {
  AaronProfilePicture,
  ArnobProfilePicture,
  CamilleProfilePicture,
} from "../assets";
import { NdudiProfilePicture } from "../assets";
export const Members = [
  {
    id: "aaron",
    firstName: "Aaron",
    lastName: "Marsh",
    major: "Computer Scientist",
    skills: ["Computer Scientist"],
    profileImage: AaronProfilePicture,
    tools: ["Swift", "JavaScript", "TypeScript", "Golang", "C++", "Python"],
    description:
      "Hi, My name is Aaron Marsh! I am an aspiring Computer Scientist. Currently I am a Full-Stack Developer meaning I build mobile and web applications. I also work with Robotics and Machine Learning. I am apart of the MEZ (Michigan Engineering Zone) where my team builds our robots!",
    projects: [
      {
        title: "Connect Me Tutoring",
        desription: "I volunteered to build a Cross-Platform App",
      },
      {
        title: "Connect Me Tutoring Mobile APP",
        desription: "I volunteered to build a Cross-Platform App",
      },
    ],
  },
  {
    id: "arnob",
    firstName: "Arnob",
    lastName: "Barua",
    major: "Aerospace",
    skills: ["Aerospace Engineering"],
    description:
      "I am future aerospace engineer that specializes in Computer Aided  Design or Cad for short. I use Manley Autodesk Inventor Professionals and I use other CAD  softwares such as On-Shape, Solid Works, and fusion 360. I know how to design complex designs and how to display motions through different programs for prototyping or manufacturing. I mainly 3D print most of my designs and products. ",
    profileImage: ArnobProfilePicture,
    tools: ["CAD Fusion"],
    projects: [],
  },
  {
    id: "Ndudi",
    firstName: "Ndudi",
    lastName: "Ilechie",
    major: "Nursing",
    skills: ["Nursing"],
    profileImage: NdudiProfilePicture,
    tools: [],
    projects: [],
  },
  {
    id: "camille",
    firstName: "Camille",
    lastName: "Johnson",
    major: "Mechanical Engineering",
    skills: ["Design And Prototyping"],
    profileImage: CamilleProfilePicture,
    tools: ["CAD Solid Works"],
    projects: [],
  },
] as Person[];
