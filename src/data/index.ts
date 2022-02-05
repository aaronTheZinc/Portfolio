import { Person } from "../types";
import {
  AaronProfilePicture,
  Logo,
  ArnobProfilePicture,
  CamilleProfilePicture,
  NdudiProfilePicture,
  ConnectMeLogo,
  DTELogo,
  FRCLogo,
  EcotekLogo,
  CAY2Logo,
  SHPELogo,
  NAFLogo,
  MathCorpsLogo,
  DODStemLogo,
  LTULogo,
  MIHLogo
} from "../assets";

export const Members = [
  {
    id: "aaron",
    firstName: "Aaron",
    lastName: "Marsh",
    email: "aaronmarshbusiness11@gmail.com",
    major: "Computer Scientist",
    skills: ["Computer Scientist"],
    profileImage: AaronProfilePicture,
    tools: ["Swift", "JavaScript", "TypeScript", "Golang", "C++", "Python"],
    links: [
      {
        title: "Github",
        uri: "https://github.com/aaronTheZinc"
      }, {
        title: "Code For This Website",
        uri: "https://github.com/aaronTheZinc/Portfolio"
      }, {
        title: "Connect Me Mobile App",
        uri: "https://apps.apple.com/us/app/connect-me-tutoring/id1585081750",
      },
      {
        title: "TruckedAway",
        uri: "https://truckedaway.com/s"
      }, {
        title: "Robot Code",
        uri: "https://github.com/aaronTheZinc/Fredrick"
      }, {
        title: "RC Arduino Car",
        uri: "https://youtu.be/uiH7mlbFxGo"
      }
    ],
    description:
      "My name is Aaron Marsh, and I am an aspiring Computer Scientist. I am currently a Full-Stack Developer who builds mobile and web applications. In addition, I work with Robotics and Machine Learning. Finally, as a member of the MEZ (Michigan Engineering Zone) our team has the awesome task of building robots!",
    projects: [
      {
        title: "Connect Me Tutoring",
        description:
          "Working for the non-profit, Connect Me Tutoring, allowed me the opportunity to build a Cross-Platform App that allows students, and tutors, a seamless onboarding into the organization. It provides a specific location to access session information, such as zoom links, and reminders of upcoming meetings. I was able to successfully use React Native, TypeScript, and Golang for this project. ",
        image: ConnectMeLogo,
        link: "",
      },
      {
        title: "DTE",
        image: DTELogo,
        description:
          "DTE utilizes an internal tool that sends push notifications to notify clients of outages. Using Angular, JavaScript, and DOTNET Framework, I was able to successfully update their current system.",
      },
      {
        title: "Renaissance Robotics",
        image: FRCLogo,
        description:
          "As the Robotics Programming Captain for Renaissance High School, we are using C++ this year and will be implementing autonomous functionality.",
      },
      {
        title: "Ecotek Labratories",
        image: EcotekLogo,
        description:
          "At Ecotek, I train autonomous vehicles using Neural and Convolutional Networks in C++.",
      },
      {
        title: "CAY2 Foundation",
        image: CAY2Logo,
        description:
          "CAY2 is a program I joined where we were tasked to identify problems in our community using technology to solve them. Using JavaScript and Rust, our application is still in the works. ",
      },
    ],
  },
  {
    id: "arnob",
    firstName: "Arnob",
    lastName: "Barua",
    email: "arnobbarua34@gmail.com",
    major: "Aerospace Engineering",
    skills: ["Aerospace Engineer & Machinist"],
    links: [
      {
        title: "FIRST",
        uri: "https://www.firstinspires.org/"
      },
      {
        title: "WSU Math corps",
        uri: "https://mathcorps.org/"
      },
      {
        title: "DoDSTEM",
        uri: "https://dodstem.us/"
      },
      {
        title: "MIHSSCA",
        uri: "https://mihssca.com/"
      },
      {
        title: "FRC Shooter",
        uri: "https://youtu.be/MmG25PFuLiw"
      }
    ],
    description:
      "My name is Arnob Barua and I aspire to be a future aerospace engineer that specializes in Computer Aided  Design or Cad for short. I use Manley Autodesk Inventor Professionals and I use other CAD  softwares such as On-Shape, Solid Works, and fusion 360. I know how to design complex designs and how to display motions through different programs for prototyping or manufacturing. I mainly fabricate my items though 3D printing or Waterjetting most of my designs and products. I have helped improved and fabricate many different products from many different companies. I have worked as Teacher Asistance (TA) for about 3 years in a program called Math Corps where you teach middle school students how to solve not ony math problems but solve community problems. ",
    profileImage: ArnobProfilePicture,
    tools: ["Autodesk Inventor Professional", "SolidWorks", "Onshape", "Fusion 360\n Java"],
    projects: [
      {

        title: "FIRST",
        description: " FIRST, a community where highschool students team up and build a robot for certain challenges every year. I am the CAD and Mechanical of my high school robotics team. I was apart of our accomplisment of winning 2019 Detroit FRC champion, and 2019 DPS ALL DPS robotics team award. We have been to 2019-2020 Deep Space State champion ships and 2019-2020 Deep Space World Championships Detroit. ",
        image: FRCLogo,
      },
      {
        title: "Math Corps",
        description: "A comminuty where everyone is accepted. A place where middle schoolers are taught math by high school students. Math corps isn't only about teaching math, but it is how we all can be one as a family and how we can share kindness throughout everyone in the world, even to the ones that struggledd the most in their own lives. I taught at math corps for 3 summers and 3 winters as a Teacher Assistance by teaching kids and Assisting my College Assistants in our team.   ",
        image: MathCorpsLogo,
      },
      {
        title: "DoDSTEM",
        description: "Science, Technology, Engineering and Mathematics, or STEM, is the gateway to a world of wonder. U.S. Department of Defense (DoD) STEM professionals work at the leading edge of our nation’s most advanced technological breakthroughs. I participated as a intern over there to work along side professional engineers where they taught me certain skils that I would use in real life during my career. They invite all students where they can learn about STEM and be apart of the community to help advance the world and the people in it.  ",
        image: DODStemLogo,
      },
      {
        title: "MIHSSCA ",
        description: "Michigan High School Soccer Coaches Association. A league I contributed a lot to the team since the team was very new because of COVID-19 and other things associated to the team not being able to start. I helped guide newer members to the team to get used to the game and to enjoy it.    ",
        image: MIHLogo,
      }
    ],
  },
  // {
  //   id: "ndudi",
  //   firstName: "Ndudi",
  //   lastName: "Ilechie",
  //   major: "Nursing",
  //   skills: ["Nursing"],
  //   email: "",
  //   profileImage: NdudiProfilePicture,
  //   tools: [],
  //   links: [],
  //   projects: [
  //     {

  //       title: "Discover Engineering with SHPE",
  //       description: "I took a course on how to use CAD Solidworks that was taught by Current U of M students where I was taught what troubleshooting was like and collaboration. I was then able to present my final design to a showcase at the end of the program. ",
  //       image: SHPELogo,
  //     },
  //     {
  //       title: "Connect Me Online Tutoring",
  //       description: "Hello",
  //       image: FRCLogo,
  //     }
  //   ],
  // },
  {
    id: "camille",
    firstName: "Camille",
    lastName: "Johnson",
    email: "camileigh0324@gmail.com",
    links: [
      {
        title: "Connect Me Website",
        uri: "https://connectmego.org/",
      },
      {
        title: "Video of Photoresistor",
        uri: "https://youtube.com/shorts/rS0Yhicwm_4?feature=share ",
      },
      {
        title: "Video of Intake",
        uri: "https://youtube.com/shorts/M9-C9XYw_UE?feature=share ",
      },
      {
        title: "WNCT9 Connect Me News Interview",
        uri: "https://www.wnct.com/local-news/free-tutoring-service-assisting-students-in-need-across-enc/ ",
      },
    ],
    description: "My name is Camille Johnson and I am a senior at Renaissance High School in Detroit, Michigan. I am on the Executive Board of a Free Online Tutoring Non-Profit called Connect Me that is completely student run. I am also the Head Captain of my high school’s Robotics team (Team 2224 Robo Phoenix) where I  lead my team to build a working robot in 6 weeks to compete locally, statewide, and worldwide. Right now, I mainly work on the Electrical and Mechanical components of the building process. I am a CIEE Global Navigator where I had the opportunity to study abroad in Mexico for a month to gain more knowledge about the culture and increase my Spanish language skills.",
    major: "Mechanical / Electrical Engineering",
    skills: ["Mechanical/ Electrical Engineering"],
    profileImage: CamilleProfilePicture,
    tools: ["CAD Solidworks", "Arduino", "NX"],
    projects: [
      {

        title: "Discover Engineering with SHPE",
        description: "I took a course on how to use CAD Solidworks that was taught by Current U of M students where I was taught what troubleshooting was like and collaboration. I was then able to present my final design to a showcase at the end of the program.",
        image: SHPELogo
      },
      {
        title: "Connect Me Online Tutoring",
        description: "In the Executive Board, I am the Director of Communications where I created and hold the title of “Chair” of the Connect Me Admissions Committee. Here, My team of “pairers” and I work together to admit both tutors and students. Some more notable things that I have done in Connect Me was getting a partnership with her Middle School (Crescent Academy Charter Schools) to give back to her community directly, is the Founder and President of the Connect Me Chapter at Renaissance High School, and is the Program Lead for tutoring a group 30+ of students in Uganda in English. I ultimately  joined Connect Me as a regular tutor with hopes to make tutoring resources more accessible to students in my community. ",
        image: ConnectMeLogo,
      },
      {
        title: "NAF Future Ready Scholars",
        description: "In NAF, I and my fellow team members worked together to prototype and design an invention using an Arduino that would help the environment. We prototyped a robot that would roam on the bottom of riverbeds and collect the trash and filter out harsh chemicals that are harmful to the environment. To do this my teammates made a full prototype on Tinker-CAD while I made parts of the prototype in real life. I programmed and wired a photoresistor that would detect the amount of light that comes in. This would simulate the robot knowing when they reach the desired depth in the river so it can start collecting trash and filtering chemicals. I also created a vacuum roll inspired intake that would clean the trash up.",
        image: NAFLogo,

      },
      {
        title: "Dual Enrolment at Lawrence Technological University",
        description: "I took a Dual Enrollment Course at Lawrence Tech where I was introduced to the main principles of engineering. I was taught about structural design where I built a house of cards that would knock over with wind and a bridge out of 60 straws that was able to hold three bricks when suspended. I was also introduced to another CAD software called NX where I learned how to create intricate designs there as well. ",
        image: LTULogo,

      }
    ],
  },
] as Person[];
