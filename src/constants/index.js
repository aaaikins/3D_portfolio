import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  veritas,
  surestart,
  colby,
  chattopdf,
  resume,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: threejs,
  },
  {
    name: "PostgreSQL",
    icon: git,
  },
  {
    name: "TensorFlow",
    icon: figma,
  },
  {
    name: "Flask",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Veritas Foundation Inc.",
    icon: veritas,
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Led development of the organization's official website using Next.js and TypeScript and deployed on AWS amplify.",
      "Designed a scalable RESTful API with Express.js and hosted on AWS lambda together with Amazon API Gateway.",
      "Integrated an AI-powered chatbot using Amazon Bedrock, automating common inquiries and improving response times and user engagement."
    ],
  },
  {
    title: "Teaching Assistant - CS152",
    company_name: "Colby College",
    icon: colby,
    iconBg: "#383E56",
    date: "February 2024 – December 2024",
    points: [
      "Assisted 50+ students in programming concepts in Python, leading to a 30% improvement in project scores during the Spring 2024 semester compared to previous semesters.",
      "Provided hands-on technical support during computer lab sessions, debugging code and resolving software issues to enhance learning efficiency."
    ],
  },
  {
    title: "AI Engineer Intern",
    company_name: "SureStart AI",
    icon: surestart,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Led a 3-person team to design Passport Pal, an AI travel assistant, utilizing OpenAI, React.js, and FastAPI.",
      "Engineered a real-time notification system using AWS SNS to send personalized and timely travel reminders.",
      "Implemented user authentication with Clerk, deployed frontend on Amazon Amplify, hosted serverless backend on AWS Lambda."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aikins demonstrated exceptional technical skills and leadership while working on Passport Pal. His ability to coordinate team efforts and deliver results was impressive.",
    name: "SureStart AI",
    designation: "Program Lead",
    company: "SureStart",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "As a teaching assistant, Aikins showed remarkable dedication to helping students succeed. His technical support improved our lab efficiency significantly.",
    name: "CS Department",
    designation: "Professor",
    company: "Colby College",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Aikins delivered exceptional Experience on our website and API development. His AWS expertise and problem-solving skills were invaluable to our organization.",
    name: "Project Manager",
    designation: "PM",
    company: "Veritas Foundation",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "AI-Powered PDF Assistant",
    description:
      "A SaaS application enabling users to upload, view, and chat with PDF documents using Next.js with TypeScript. Built RAG pipeline using LangChain, Pinecone vector database and OpenAI for accurate document answers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: chattopdf,
    source_code_link: "https://chat-with-pdf-blond.vercel.app",
  },
  {
    name: "AI Resume Analyzer",
    description:
      "An AI resume scoring tool using Amazon Comprehend and AWS serverless stack (S3, Lambda, API Gateway). Automated CI/CD pipeline using AWS Amplify with Clerk authentication and dynamic React visualizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "amplify",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://main.dws2b1a2xvqhb.amplifyapp.com",
  },
  {
    name: "TrackFunds",
    description:
      "A responsive transaction tracker built with MongoDB, Express.js, React, and Node.js, supporting full CRUD operations. Features real-time updates and schema validation for secure financial data storage.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aaaikins/track-funds",
  },
];

export { services, technologies, experiences, testimonials, projects };
