import {React,useState} from "react";
import axios from 'axios';
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const messageSendHandler = async () => {
    try {
      const resp = await axios.post(
        "https://mern-cms-server.onrender.com/contact-page/add-query",
        {
          firstName: firstName,
          email: email,
          description: description,
        }
      );
      console.log("response: ", resp.data.data);
      setFirstName("");
      setEmail("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-8"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-0 py-20">
          <p className="text-4xl cursor-pointer text-black rounded-md font-bold inline bg-gradient-to-r from-lime-0 via-slate-400 to-slate-100 px-6">
            Contact
          </p>
          <p className="py-6 text-white">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button onClick={messageSendHandler} className="text-white font-bold bg-gradient-to-r from-gray-700 to-orange-800
              px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
