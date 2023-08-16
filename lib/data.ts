import React from "react";

//projects imgs
import buyforbaby from "@/public/assets/projects/buyforbaby.png";
import risemybooks from "@/public/assets/projects/risemybooks.png";
import bookmyshow from "@/public/assets/projects/bookmyshow.png";

//icons
import { FaGraduationCap } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";

export const links = [
  {
    link: "Home",
    hash: "#home",
  },
  {
    link: "About",
    hash: "#about",
  },
  {
    link: "Projects",
    hash: "#projects",
  },
  {
    link: "Skills",
    hash: "#skills",
  },
  {
    link: "Education",
    hash: "#education",
  },
  {
    link: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    title: "Buy-For-Baby",
    desc: "An E-commerce web Application designed for babies. This site provides all kind of products for kids and differentiated by the categories.",
    tags: [
      "React",
      "CSS",
      "Sanity",
      "Netlify",
      "Google-OAuth",
      "Github",
      "Responsiveness",
    ],
    liveLink: "https://buy-for-baby.netlify.app/",
    imageUrl: buyforbaby,
  },
  {
    title: "Rise-My-Books",
    desc: "Fully books store through online. Each type of book is seperated to get simplicity and easy to access with payment functionality. ",
    tags: ["React", "CSS", "Email JS", "Responsiveness", "Github"],
    liveLink: "https://enjamurisagar.github.io/rise-my-books/",
    imageUrl: risemybooks,
  },
  {
    title: "Book-My-Show Clone",
    desc: "A cloned website of a movie tickets booking app Book My Show.",
    tags: ["HTML", "CSS", "Java script"],
    liveLink: "https://enjamurisagar.github.io/BookMyShow-Clone/",
    imageUrl: bookmyshow,
  },
] as const;

export const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "Mongodb",
  "Next.js",
  "Type script",
  "HTML",
  "CSS",
  "Java script",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Python",
  "C++",
  "Java",
  "Wordpress",
] as const;

export const educationData = [
  {
    title: "Bachelors of Tech.",
    college: "Vardhaman College of Engineering.",
    place: "Hyderabad, Telangana.",
    duration: "2021-24",
    icon: React.createElement(FaGraduationCap),
    link: "https://www.vardhaman.org",
  },
  {
    title: "Diploma (Polytechnic)",
    college: "Government Polytechnic College",
    place: "Nalgonda, Telangana.",
    duration: "2018-21",
    icon: React.createElement(MdEngineering),
    link: "https://sbtet.telangana.gov.in/",
  },
  {
    title: "SSC",
    college: "Telangana State Model school",
    place: "Bothalapalem, Nalgonda",
    duration: "2012-2018",
    icon: React.createElement(LiaSchoolSolid),
    link: "https://telanganams.cgg.gov.in/",
  },
] as const;
