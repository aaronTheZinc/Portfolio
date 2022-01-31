import { Person } from "../components/profileCard";
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
    major: "Computer Science",
    skills: ["Computer Scientist"],
    profileImage: AaronProfilePicture,
    tools: ["Swift", "JavaScript", "TypeScript", "Golang", "C++", "Python"],
    description:
      "Hi, My name is Aaron Marsh! I am an aspiring Computer Scientist. Currently I am a Full-Stack Developer meaning I build mobile and web applications. I also work with Robotics and Machine Learning. I am apart of the MEZ (Michigan Engineering Zone) where my team builds our robots!",
  },
  {
    id: "arnob",
    firstName: "Arnob",
    lastName: "Barura",
    skills: ["Mechanical Engineer"],
    profileImage: ArnobProfilePicture,
    tools: ["CAD Fusion"],
  },
  {
    id: "Ndudi",
    firstName: "Ndudi",
    lastName: "Ilechie",
    skills: ["Nurse"],
    profileImage: NdudiProfilePicture,
    tools: [],
  },
  {
    id: "camille",
    firstName: "Camille",
    lastName: "Johnson",
    skills: ["Design And Prototyping"],
    profileImage: CamilleProfilePicture,
    tools: ["CAD Solid Works"],
  },
] as Person[];
