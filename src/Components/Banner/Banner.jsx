import TitleDescription from "../../Hooks/TitleDescription";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Banner = () => {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1cMJ8ibImtfJ4MJjLrCPxpz97FFpvf7_n";

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
      {/* Title and description */}
      <TitleDescription
        title={"Shakil Ahmmed"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia similique eaque dolorem repellat ut. Molestias omnis, blanditiis iusto"
        }
      />

      {/* Icons */}
      <div className="flex gap-3">
        <GitHubIcon
          style={{ fontSize: "40px" }}
          className="bg-grayBg p-2 rounded-full cursor-pointer hover:bg-primaryColor transition-all duration-300"
        />
        <MarkEmailReadIcon
          style={{ fontSize: "40px" }}
          className="bg-grayBg p-2 rounded-full cursor-pointer hover:bg-primaryColor transition-all duration-300"
        />
        <LinkedInIcon
          style={{ fontSize: "40px" }}
          className="bg-grayBg p-2 rounded-full cursor-pointer hover:bg-primaryColor transition-all duration-300"
        />
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
