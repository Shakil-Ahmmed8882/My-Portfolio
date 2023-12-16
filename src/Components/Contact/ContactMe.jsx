import { useState } from "react";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation, e.g., check if name, email, and message are not empty

    // Send form data to Formspree using fetch or axios
    try {
      const response = await fetch("https://formspree.io/f/xoqogrvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Handle success - clear form fields or show success message
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!");
      } else {
        // Handle errors - display an error message
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  return (

    <div className="md:flex ">
<img className="w-full hidden md:block  object-cover md:w-1/2 h-[75vh] " src="https://i.ibb.co/HghqZzB/contact.png" alt="" />
    <form onSubmit={handleSubmit} className="md:w-1/2 text-center bg-[#fff] relative -top- p-3 rounded-lg" id="contact">
      <section className="body-font relative bg-gray-900 text-gray-400">
        <div className="container ">
          <div className="mb-8 flex w-full flex-col ">
            <h1 className="title-font mt-6 text-2xl font-medium text-white sm:text-3xl">
              Contact Me
            </h1>
         
          </div>
          <div className="">
            <div className="-m-2 flex flex-wrap">
              {/* form */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="peer w-full rounded  border-none border-gray-700 bg-[#9b8f8a0c] bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder=""
                  />
                  <label
                    htmlFor="name"
                    className="absolute border-none left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    value={email}
                    name="email"
                    className="peer w-full bg-[#9b8f8a0c] rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out border-none focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 "
                    placeholder=""

                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    className="peer h-32 w-full resize-none border-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out bg-[#9b8f8a0c] focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder=""
                    defaultValue={""}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2 ">
                <button className=" bg-primaryColor mx-auto text-primaryText  flex rounded border-0 bg-indigo-500 py-2 px-40 md:px-20 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Send
                </button>
              </div>
              {/* footer */}
              
            </div>
          </div>
        </div>
      </section>
    </form>
    </div>
  );
};

export default ContactMe;
