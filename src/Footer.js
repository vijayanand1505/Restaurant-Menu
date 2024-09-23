import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPortrait,
} from "react-icons/fa"; 

function Footer() {
  return (
    <>
      <div className="footer">
        Copyright &copy; {new Date().getFullYear()} Vijay. All Rights Reserved
      </div>
      <div className="footer-icons">
        <span>
          <a
            href="https://github.com/vijayanand1505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-anand-b14bb6230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/_.vijiii._?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://vijayanandthangavel.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPortrait />
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
