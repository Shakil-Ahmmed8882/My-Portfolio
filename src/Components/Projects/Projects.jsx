import { useState } from "react";
import Slider from "./Slider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./project.css"


// images
import c1 from "../../assets/img/c1.png";
import c2 from "../../assets/img/c2.png";
import c3 from "../../assets/img/c3.png";
import c4 from "../../assets/img/c4.png";
import c5 from "../../assets/img/c5.png";
import c6 from "../../assets/img/c6.png";
import c7 from "../../assets/img/c7.png";
import allContest from "../../assets/img/allcontest.png";


import rest01 from "../../assets/img/rest1.png";
import rest02 from "../../assets/img/rest02.png";
import rest03 from "../../assets/img/rest03.png";
import rest04 from "../../assets/img/rest04.png";
import rest05 from "../../assets/img/rest05.png";
import rest06 from "../../assets/img/rest06.png";
import rest07 from "../../assets/img/rest07.png";
import rest08 from "../../assets/img/rest08.png";
import rest09 from "../../assets/img/rest09.png";
import TitleDescription from "../../Hooks/TitleDescription";


// compiling all into an array
// Contest Images
    
    // Restaurant Images
    const allImages = [
      c1, rest02,c2, rest03,c3, rest04,c4, rest05,c5, rest06,c6, rest07,allContest, rest08,c7, rest09
    ];
    


const projects = [
  {
    title: "Restaurant Operating System",
    description:
      "RestOs is a comprehensive Restaurant Management Project designed to offer essential functionalities. Users can visit the platform, register or log in, view the menu, place food orders, add new food items, and access the list of orders placed, and there is admin role to manage food order..",
    githubLink: "https://github.com/Shakil-Ahmmed8882/RestOS",
    liveLink:"https://restos-748ac.web.app/"
  },
  {
    title: "ContestHub",
    description:
      "ContestHub: A dynamic platform for Admins, Creators, and Users. Explore contests effortlessly! Intuitive interface for seamless navigation. Engage, search, and discover myriad contests. Highlights include popular contests and victorious winners, ensuring a diverse and interactive experience for all users",
    githubLink: "https://github.com/Shakil-Ahmmed8882/ContestHub-client-12",
    liveLink:"https://contestcraft-350e1.web.app/"
  },
  {
    title: "Restaurant Operating System",
    description:
      "RestOs is a comprehensive Restaurant Management Project designed to offer essential functionalities. Users can visit the platform, register or log in, view the menu, place food orders, add new food items, and access the list of orders placed, and there is admin role to manage food order..",
    githubLink: "https://github.com/Shakil-Ahmmed8882/RestOS",
    liveLink:"https://restos-748ac.web.app/"
  },
  {
    title: "ContestHub",
    description:
      "ContestHub: A dynamic platform for Admins, Creators, and Users. Explore contests effortlessly! Intuitive interface for seamless navigation. Engage, search, and discover myriad contests. Highlights include popular contests and victorious winners, ensuring a diverse and interactive experience for all users",
    githubLink: "https://github.com/Shakil-Ahmmed8882/ContestHub-client-12",
    liveLink:"https://contestcraft-350e1.web.app/"
  },
];

//step 2

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setActiveProject(projects[activeIndex]);
  };
  return (
    <div className="px-3">

    <div className="md:grid grid-cols-2 items-center gap-5">
      <div className="mb-7 md:mb-0">
        <Slider handleSlideChange={handleSlideChange}></Slider>
      </div>
      <div className="project-info flex-1 ">
        <h2 className="text-3xl mb-2 font-bold">{activeProject?.title}</h2>
        <p className="text-[#7d7c7c]">{activeProject?.description}</p>
        <div>
          <a
            href={activeProject?.githubLink}
            target="_blank"
            className="pt-2]"
            rel="noopener noreferrer">
            <GitHubIcon
              style={{ fontSize: "40px" }}
              className=" p-2 rounded-lg"
            />
          </a>
          <a
            href={activeProject?.liveLink}
            target="_blank"
            className="pt-2]"
            rel="noopener noreferrer">
            <LiveTvIcon
              style={{ fontSize: "40px" }}
              className=" text-[#ff3300] p-2 rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>

<div className="py-8">
      <h1 className="text-3xl my-2">Some Demos</h1>
    <div className="grid grid-cols-4 grid_responsive gap-8">
      {allImages?.map((image,idx) =>    <img
      className=" lg:hover:scale-[1.5] lg:scale-100 lg:hover:z-20  cursor-pointer transition-transform duration-300"
      key={idx}
      src={image}
      alt={`Image ${idx}`} // Added alt attribute for accessibility
    />)}
    </div>

</div>
    </div>
  );
};

export default Projects;
