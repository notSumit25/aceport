import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-20 bg-black text-white py-4">
      <div className="w-full flex justify-between">
        <ul className="flex space-x-7 text-lg">
          <li>
            <Link href={"/"} className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href={"#about"} className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href={"#projects"} className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href={"#experience"} className="hover:text-blue-500">
              Experience
            </Link>
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
            <Link
              target="blank"
              href="https://github.com/notSumit25"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://twitter.com/Sumitslayer25"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://www.instagram.com/sumit___garg/"
              className="hover:text-blue-500"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between mt-10 items-center">
        <div className="space-y-6">
          <p className="text-xl font-bold">
            Interested in Working together{" "}
            <span className="text-blue-500">?</span>{" "}
          </p>
          <div className="flex space-x-6">
            <Link href={'/contact-me'} className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-bold">Get In Touch</Link>
            <Link href={'/projects'} className="border px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 hover:border-blue-500">Browse Projects</Link>

          </div>
        </div>
        <div className="text-lg">
            <p>©2024 All Rights Reserved</p>
          <p>
            Made with <span>💙</span> By Sumit Garg
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
