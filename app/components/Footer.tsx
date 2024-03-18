import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-20 bg-black text-white">
      <div className="w-full flex justify-between">
        <ul className="flex space-x-7 text-lg">
            <li>
                <Link href={"/"} className="hover:text-blue-500">Home</Link>
            </li>
            <li>
                <Link href={"#about"} className="hover:text-blue-500">About</Link>
            </li>
            <li>
                <Link href={"#projects"} className="hover:text-blue-500">Projects</Link>
            </li>
            <li>
                <Link href={"contact-me"} className="hover:text-blue-500">Contact</Link>
            </li>
        </ul>
        <ul className="flex space-x-7 text-lg">
            <li>
                <Link
                    target="blank"
                    href="https://www.linkedin.com/in/sumit-garg-056b8b23a/"
                    className="hover:text-blue-500"
                >
                    <FaLinkedin />
                </Link>
            </li>
            <li>
                <Link target="blank" href="https://github.com/notSumit25" className="hover:text-blue-500">
                    <FaGithub />
                </Link>
            </li>
            <li>
                <Link target="blank" href="https://twitter.com/Sumitslayer25" className="hover:text-blue-500">
                    <FaTwitter />
                </Link>
            </li>
            <li>
                <Link target="blank" href="https://www.instagram.com/sumit___garg/" className="hover:text-blue-500">
                    <FaInstagram />
                </Link>
            </li>
        </ul>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="text-lg">
          <p>Made with <span>💙</span> By Sumit Garg</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
