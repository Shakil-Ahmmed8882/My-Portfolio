import { useState } from "react";
import Slider from "./Slider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./project.css";

// compiling all into an array
// Contest Images
import img0 from "../../assets/img/innerImg/borderless1.png";
import img1 from "../../assets/img/innerImg/borderless2.png";
import img2 from "../../assets/img/innerImg/borderless3.png";
import img3 from "../../assets/img/innerImg/borderless4.png";
import img4 from "../../assets/img/innerImg/borderless5.png";
import img5 from "../../assets/img/innerImg/borderless7.png";
import img6 from "../../assets/img/innerImg/borderless9.png";
import img7 from "../../assets/img/innerImg/borderless10.png";
import img8 from "../../assets/img/innerImg/allcontest.png";
import img9 from "../../assets/img/innerImg/borderless.png";
import img10 from "../../assets/img/innerImg/c1.png";
import img11 from "../../assets/img/innerImg/c2.png";
import img12 from "../../assets/img/innerImg/c3.png";
import img13 from "../../assets/img/innerImg/c4.png";
import img14 from "../../assets/img/innerImg/c5.png";
import img15 from "../../assets/img/innerImg/c6.png";
import { useNavigate } from "react-router-dom";

import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";

// Restaurant Images
const allImages = [
  { img: img1, link: "https://restos-748ac.web.app/blog" },
  { img: img2, link: "https://contestcraft-350e1.web.app/allContests" },
  { img: img3, link: "https://restos-748ac.web.app/food" },
  {
    img: img4,
    link: "https://shakil-ahmmed8882.github.io/Simple-calculator-/",
  },
  { img: img5, link: "https://shakil-ahmmed8882.github.io/To-Do-List/" },
  { img: img6, link: "https://skillery.surge.sh/courses" },
  { img: img7, link: "https://shakil-ahmmed8882.github.io/Glowing-Box/" },
  { img: img9, link: "https://restos-748ac.web.app/" },
  {
    img: img10,
    link: "https://contestcraft-350e1.web.app/payment/656d0eaef3b64ea77cbf97a4",
  },
  {
    img: img11,
    link: "https://contestcraft-350e1.web.app/dashboard/registeredContests",
  },
  { img: img12, link: "https://contestcraft-350e1.web.app/dashboard/home" },

  { img: img15, link: "https://contestcraft-350e1.web.app/" },
];

const projects = [
  {
    title: "Restaurant Operating System",
    description:
      "RestOs is a comprehensive Restaurant Management Project designed to offer essential functionalities. Users can visit the platform, register or log in, view the menu, place food orders, add new food items, and access the list of orders placed, and there is admin role to manage food order..",
    githubLink: "https://github.com/Shakil-Ahmmed8882/RestOS",
    liveLink: "https://restos-748ac.web.app/",
  },
  {
    title: "ContestHub",
    description:
      "ContestHub: A dynamic platform for Admins, Creators, and Users. Explore contests effortlessly! Intuitive interface for seamless navigation. Engage, search, and discover myriad contests. Highlights include popular contests and victorious winners, ensuring a diverse and interactive experience ",
    githubLink: "https://github.com/Shakil-Ahmmed8882/ContestHub-client-12",
    liveLink: "https://contestcraft-350e1.web.app/",
  },
  {
    title: "Restaurant Operating System",
    description:
      "RestOs is a comprehensive Restaurant Management Project designed to offer essential functionalities. Users can visit the platform, register or log in, view the menu, place food orders, add new food items, and access the list of orders placed, and there is admin role to manage food order..",
    githubLink: "https://github.com/Shakil-Ahmmed8882/RestOS",
    liveLink: "https://restos-748ac.web.app/",
  },
  {
    title: "ContestHub",
    description:
      "ContestHub: A dynamic platform for Admins, Creators, and Users. Explore contests effortlessly! Intuitive interface for seamless navigation. Engage, search, and discover myriad contests. Highlights include popular contests and victorious winners, ensuring a diverse and interactive experience ",
    githubLink: "https://github.com/Shakil-Ahmmed8882/ContestHub-client-12",
    liveLink: "https://contestcraft-350e1.web.app/",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const goTo = useNavigate();

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setActiveProject(projects[activeIndex]);
  };
  return (
    <div className="md:px-3">
      <div className="md:grid grid-cols-2  items-center gap-5">
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
              className="pt-3"
              rel="noopener noreferrer">
              <GitHubIcon
                style={{ fontSize: "40px", marginTop: "14px" }}
                className=" p-2 rounded-lg"
              />
            </a>
            <a
              href={activeProject?.liveLink}
              target="_blank"
              className="pt-2]"
              rel="noopener noreferrer">
              <LiveTvIcon
                style={{ fontSize: "40px", marginTop: "14px" }}
                className=" text-[#ff3300] p-2 rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col md:items-center lg:flex-row  justify-between mt-11">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="SvgjsSvg1345"
              x="0"
              y="0"
              className="lg:block hidden"
              version="1.1"
              viewBox="0 0 494.148 494.148"
              width="50"
              height="50"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev/svgjs">
              <path
                d="M405.284 201.188 130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
                fill='url("#SvgjsLinearGradient1346")'></path>
              <defs>
                <linearGradient
                  gradientTransform="rotate(90 0.5 0.5)"
                  id="SvgjsLinearGradient1346">
                  <stop
                    stop-opacity=" 1"
                    stop-color="rgba(105, 234, 203)"
                    offset="0"></stop>
                  <stop
                    stop-opacity=" 1"
                    stop-color="rgba(234, 204, 248)"
                    offset="0.48"></stop>
                  <stop
                    stop-opacity=" 1"
                    stop-color="rgba(240, 85, 63)"
                    offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>

            <div className="mb-5 md:text-center lg:text-left">
              <h1 className="text-3xl mb-1  ">Some Demo projects</h1>
              <p className="lg:w-2/3  text-[#5a5858]">
                Here some demo projects that I have recently developed. Click any of them to have live view
              </p>
            </div>
          </div>

          <div className="lg:pt-4 mb-9 lg:text-right flex-1 ">
            <button
              onClick={() => goTo("/contact")}
              className="bg-primaryColor p-2 md:px-11 h-11 md:h-16 hover:bg-[#ff440b] rounded-lg lg:w-3/4 text-[white]">
              <SettingsPhoneIcon
                style={{ color: "white", marginRight: "5px" }}
              />
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex  gap-1 pb-5">
          {/* =========== triangle=============== */}
        </div>
        {/* =========== triangle=============== */}
        <div className="grid project_parent grid-cols-4 grid_responsive gap-8">
          {allImages?.map((image, idx) => (
            <a
              className="shadow-xl md:shadow-lg mb-3 md:mb-0"
              key={idx}
              href={image.link}>
              {" "}
              {/* Added closing angle bracket here */}
              <img
                className="lg:hover:-translate-y-3  rounded-lg cursor-pointer transition-transform duration-300"
                key={idx}
                src={image.img}
                alt={`Image ${idx}`} // Added alt attribute for accessibility
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
