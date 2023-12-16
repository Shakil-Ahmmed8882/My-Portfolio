import TitleDescription from "../../Hooks/TitleDescription";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const goTo = useNavigate();

  const githubLink = "https://github.com/Shakil-Ahmmed8882"; // Replace 'your-github-username' with your actual GitHub username
  const linkedinLink = "https://www.linkedin.com/in/shakil-ahmmed-501aaa26a/"; // Replace 'your-linkedin-profile' with your LinkedIn profile URL
  const email = "mailto:shakilahmmed8882@gmail.com"; // Replace 'your-email@example.com' with your email address

  return (
    <div className="w-full relative flex flex-col justify-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-72 h-72 left-0 rotate-12 -bottom-[283px]"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs">
        <path
          fill='url("#SvgjsLinearGradient1688")'
          d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"></path>
        <defs>
          <linearGradient
            gradientTransform="rotate(90 0.5 0.5)"
            id="SvgjsLinearGradient1688">
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
              stop-color="rgba(254, 60, 0)"
              offset="1"></stop>
            <stop
              stop-opacity=" 1"
              stop-color="rgba(254, 60, 0)"
              offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="flex py-5 md:w-2/3 mx-2 absolute -bottom-[250px] right-68 bg-[#ffffffd5] shadow-lg p-3 gap-3">
        <TipsAndUpdatesIcon style={{ color: "#78E6D0" }} />
        <div className="">
          <h1 className="text-[21px] mb-2 font-bold">Hey </h1>
          <p className="text-description_text">
            I am glad that you are here. Are you looking for some cool stuff?
            Yes you are in the right place. Let&apos;s view some of my completed
            works. Oh yeah feel free to leave your feedback. Your comments means
            alot to me.
          </p>

          <div className="text-right justify-end">
            <button
              onClick={() => goTo("/projects")}
              className=" bg-primaryColor text-[white] p-2 rounded-lg ">
              Get my projects
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-32 "></div>
      <div></div>
      <TitleDescription
        title={"Shakil Ahmmed"}
        description={
          "Hi, I am Shakil from Bangladesh. I have been exploring programming for 2 years. When I discovered web development is my passion, I started learning and gained 1 year of hands-on experience"
        }
      />

      {/* Icons with Links */}
      <div className="flex gap-3">
        {/* GitHub Icon */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon
            style={{ fontSize: "40px" }}
            className=" p-1 rounded-full cursor-pointer  transition-all duration-300"
          />
        </a>

        {/* Email Icon */}
        <a href={email}>
          <MarkEmailReadIcon
            style={{ fontSize: "40px",color:"#4DCE75" }}
            className=" p-1 rounded-full cursor-pointer  transition-all duration-300"
          />
        </a>

        {/* LinkedIn Icon */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon
            style={{ fontSize: "40px",color:"#0A66C2" }}
            className=" p-1 rounded-full cursor-pointer  transition-all duration-300"
          />
        </a>
      </div>

      {/* Download Resume Button */}
    </div>
  );
};

export default Banner;
