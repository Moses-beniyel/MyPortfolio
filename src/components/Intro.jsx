import React from "react";
import "../styles/Intro.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
  return (
    <section className="intro-section " id="intro">
      <div className="profile-pic">
        <img src="/Assets/MyNewPic2.jpg" />
      </div>
      <div className="desc ">
        <h1>
          Hi,
        </h1>
        <h1>I'm <span className="name ">A.Moses Beniyel</span></h1>
        <h2>MERN Stack Developer | ML Enthisiast |DSA Enthusiast | 3rd Year CSE</h2>

        <p className="intro-description ">
          I’m a web developer skilled in React and JavaScript, building modern and responsive apps.
          I also explore machine learning — built projects like Face Mask Detection and Titanic Prediction using Python and TensorFlow.
          I love sharpening my DSA skills to grow as a well-rounded software engineer.
        </p>
        <div className="contact-info ">
          <a
            href="https://github.com/moses-beniyel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/moses-beniyel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href="mailto:mosesbeniyel007@gmail.com" aria-label="Email">
            <MdEmail className="icon email-icon" />
          </a>
          <a
            href="https://wa.me/918608146276"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="icon whatsapp-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
