import React from "react";
import Nav from "../component/Nav";
import coding from "../images/coding.svg"

const About = () => {
  return (
    <div className="bg-slate-300 h-[100vh] w-full flex flex-col">
      <Nav />
      <img src={coding} alt="" className="w-[500px] mx-auto" />
      <p className="text-2xl font-bold text-slate-500 mx-auto py-5">About Full-Stack Developer SADIK</p>
      <div className="bg-slate-600 font-bold text-lg text-slate-300 sm:w-[400px] md:w-[800px] py-10 mx-auto rounded-lg flex flex-col px-10 gap-4 shadow-md shadow-gray-500">
        <p className="text-end">I'm Sadık 🙂</p>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>I've already known JS, ReactJS, NodeJS, Python, Django, MongoDB, SQL.</p>
      </div>
    </div>
  );
};

export default About;
