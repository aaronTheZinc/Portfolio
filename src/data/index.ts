import { Person } from "../types";
import {
  AaronProfilePicture,
  ArnobProfilePicture,
  CamilleProfilePicture,
  ConnectMeLogo,
  DTELogo,
  FRCLogo,
  EcotekLogo,
  CAY2Logo,
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
      "My name is Aaron Marsh, and I am an aspiring Computer Scientist. I am currently a Full-Stack Developer who builds mobile and web applications. In addition, I work with Robotics and Machine Learning. Finally, as a member of the MEZ (Michigan Engineering Zone) our team has the awesome task of building robots!",
    projects: [
      {
        title: "Connect Me Tutoring",
        desription:
          "I volunteered to build a Cross-Platform App which allows students and tutors onboarded into the organization. It provides one place to access session information such as zoom links and reminders of upcoming sessions. I used React Native, TypeScript and Golang.",
        image: ConnectMeLogo,
        link: "",
      },
      {
        title: "DTE",
        image: DTELogo,
        desription:
          "I worked on the internal tool DTE uses to send push notifications to their clients to inform them on outages. I used Angular, JavaScript and DOTNET FrameWork. ",
      },
      {
        title: "Renaissance Robotics",
        image: FRCLogo,
        desription:
          "I am the Robotics Programming Captain for Renaissance. We are using C++ this year and will be implementing autonomous functionality.",
      },
      {
        title: "Ecotek Labratories",
        image: EcotekLogo,
        desription:
          "At Ecotek, I train autonomous vehicles using Neural and Convolutional Networks in C++.",
      },
      {
        title: "CAY2 Foundation",
        image: CAY2Logo,
        desription:
          "CAY2 is a program I joinded where we were tasked to identify problems in our community and solving them using technology to solve them. Are application is still in the works. I use JavaScript and Rust.",
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
