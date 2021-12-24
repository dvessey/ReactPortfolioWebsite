import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";


export default function Contact() {

  return (
    <section id="contact" className="relative">
       <div className="container px-5 py-10 mx-auto text-center">
       <TerminalIcon className="w-10 inline-block mb-4" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
           Contact Me
          </h2>
          <a href="https://www.linkedin.com/in/damon-vessey/">
            <img src="./Li-Logo.png" width="276" hieght = "67"/>
          </a>
        </div>
        
  
    </section>
  );
}