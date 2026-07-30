import {
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  docker,
  git,
  github,
  mui,
  antd,
  aggrid,
  azure,
  node,
  internet,
  python,
  api,
  react1,
  longshore,
  instagram3d,
  linkedin3d,
  github3d,
  html3D,
  css3D,
  javascript3D,
  git3D,
  tailwind3D,
  mongodb3D,
  threejsLogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: internet,
  },
  {
    title: "React Js Developer",
    icon: react1,
  },
  {
    title: "Backend Developer",
    icon: node,
  },
  {
    title: "Api Integrations",
    icon: api,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html3D,
  },
  {
    name: "CSS 3",
    icon: css3D,
  },
  {
    name: "Javascript",
    icon: javascript3D,
  },
  {
    name: "React JS",
    icon: react1,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind3D,
  },
  // {
  //   name: "MUI",
  //   icon: mui,
  // },
  // {
  //   name: "Ant Design",
  //   icon: antd,
  // },
  // {
  //   name: "Ag Grid",
  //   icon: aggrid,
  // },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongodb3D,
  },
  {
    name: "Azure",
    icon: azure,
  },
  // {
  //   name: "Docker",
  //   icon: docker,  
  // },
  // {
  //   name: "Three Js",
  //   icon: threejsLogo,  
  // },
  {
    name: "git",
    icon: git3D,  
  },
  {
    name: "github",
    icon: github3d,
  },
];

const experiences = [
 
 {
title: "Full Stack Developer",
company_name: "Longshore",
icon: longshore,
iconBg: "#E6DEDD",
date: "June 2024 - Present",
points: [
"Developing and maintaining dynamic reporting solutions using React.js, Node.js, Express.js, and MongoDB.",
"Building configurable PDF reports for investor, compliance, beneficial ownership, transaction, and financial reporting requirements.",
"Designing reusable and scalable report components that dynamically render data based on different report types and business requirements.",
"Integrating REST APIs to retrieve, process, and present complex financial and organizational data within web and PDF reports.",
"Implementing dynamic tables, conditional data rendering, pagination, and responsive layouts to ensure accurate and well-structured reports.",
"Collaborating with cross-functional teams to gather reporting requirements, resolve data-related issues, and deliver reliable reporting solutions.",
"Participating in code reviews and improving report performance, maintainability, and overall code quality."
],
},

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
 
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
 
  },
];

const follow = [
  {
    name: "linkedin",
    icon: linkedin3d,
    link: "https://www.linkedin.com/in/praveen-kumar-sept7902/"
  },
  {
    name: "github",
    icon: github3d,
    link : "https://github.com/Praveenkumar7902"
  },
  // {
  //   name: "instagram",
  //   icon: instagram3d,
  //   link : "https://www.instagram.com/parthiban_raj_?igsh=MWdsMnd5OHhkY3Bqbw=="
  // },
]
export { services, technologies, experiences, testimonials, projects, follow };
