import TitleDescription from "../../Hooks/TitleDescription";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Banner = () => {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1cMJ8ibImtfJ4MJjLrCPxpz97FFpvf7_n";

  const githubLink = "https://github.com/Shakil-Ahmmed8882"; // Replace 'your-github-username' with your actual GitHub username
  const linkedinLink = "https://www.linkedin.com/in/shakil-ahmmed-501aaa26a/"; // Replace 'your-linkedin-profile' with your LinkedIn profile URL
  const email = "mailto:shakilahmmed8882@gmail.com"; // Replace 'your-email@example.com' with your email address

  const downloadResume = async () => {
    window.location.href = resumeUrl;

    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the resume:", error);
      // Handle error
    }
  };
  return (
    <div className="w-full flex flex-col justify-center space-y-2">
      <div className="absolute"></div>
      <div></div>
      <TitleDescription
        title={"Shakil Ahmmed"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia similique eaque dolorem repellat ut. Molestias omnis, blanditiis iusto"
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
            style={{ fontSize: "40px" }}
            className=" p-1 rounded-full cursor-pointer  transition-all duration-300"
          />
        </a>

        {/* LinkedIn Icon */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon
            style={{ fontSize: "40px" }}
            className=" p-1 rounded-full cursor-pointer  transition-all duration-300"
          />
        </a>
      </div>

      {/* Download Resume Button */}
      <div className="pt-4">
        <button
          onClick={downloadResume}
          className="bg-primaryColor p-3 rounded-lg w-1/4 text-[white]">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Banner;
