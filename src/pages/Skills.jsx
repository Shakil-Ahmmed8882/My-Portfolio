import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const resumeUrl =
  "https://drive.google.com/uc?export=download&id=12To87qpGvjt5k6o9YMjRs5YHhn6C5xux";

const Skills = () => {
  // Donwload resume start

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
    <div>
      <>
        {/* source: https://flowrift.com/c/logo-cloud/atJUX?view=code */}
        <div className="bg-white py-6 mx-3 sm:py-8 lg:py-12">
          {/* <h3 className='text-3xl text-center'>The tools I have hands on experience</h3>
          <p className="text-center text-gray-600 mt-1 mb-8 text-[#949393]">
            Below are technologies I have practical experience with:
          </p> */}

          <div className="md:flex gap-3 sm:text-center md:text-left justify-between md:mt-11">
            <div className="md:mb-11 relative md:flex">
              <div className="opacity-20 hover:opacity-50 transition-opacity duration-700">
                <TipsAndUpdatesIcon
                  style={{
                    color: "#F69A5A",
                    width: "200px",
                    height: "200px",
                    position: "absolute",
                    zIndex: -1,
                    bottom: -20,
                    right: -150,
                    cursor:
                      "pointer" /* Adding a blur effect for the glowing transition */,
                  }}
                />
              </div>
              
              <div className="md:block hidden">

              <CheckCircleIcon
                style={{
                  color: "#39BC3A",
                }}
              />
              </div>
              <div>
                <h1 className="text-3xl">Skill Spectrum</h1>
                <p className="md:w-2/3 text-description_text mx-auto md:mx-0 mt-1 md:text-left">
                  These are some skills I have hands on learning along the journey.</p>
              </div>
            </div>

            <div className="pt-4 md:text-right flex-1 ">
              <button
                onClick={downloadResume}
                className="bg-primaryColor p-2 mb-8 text-[12px] md:p-3 rounded-lg md:w-2/4 text-[white]">
                Download Resume
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CSS3 */}
            <div className="card">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">CSS3</h4>
              <p className="text-description_text">
                Cascading Style Sheets (CSS) is a styling language used to
                control the presentation and layout of HTML documents.
              </p>
            </div>

            {/* Firebase */}
            <div className="card">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">Firebase</h4>
              <p className="text-description_text">
                Firebase is a comprehensive platform by Google for building web
                and mobile applications. It offers various services including
                real-time database, authentication, hosting, and cloud
                functions.
              </p>
            </div>

            {/* HTML5 */}
            <div className="card">
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">HTML5</h4>
              <p className="text-description_text">
                HyperText Markup Language (HTML) is the standard language for
                creating web pages and web applications.
              </p>
            </div>

            {/* JavaScript */}
            <div className="card">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">JavaScript</h4>
              <p className="text-description_text">
                JavaScript is a versatile programming language used for building
                interactive and dynamic web applications.
              </p>
            </div>

            {/* MongoDB */}
            <div className="card">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">MongoDB</h4>
              <p className="text-description_text">
                MongoDB is a popular NoSQL database used for storing and
                managing data in applications.
              </p>
            </div>

            {/* React */}
            <div className="card">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">React</h4>
              <p className="text-description_text">
                React is a JavaScript library for building user interfaces in
                web applications.
              </p>
            </div>

            {/* Tailwind CSS */}
            <div className="card">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                  className="m-2"
                />
              </a>
              <h4 className="text-[20px] md:text-2xl">Tailwind CSS</h4>
              <p className="text-description_text">
                Tailwind CSS is a utility-first CSS framework for creating
                custom designs without leaving your HTML.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Skills;
