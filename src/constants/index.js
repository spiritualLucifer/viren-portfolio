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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  PricemateLogo,
  Vicolab,
  ImagiAI,
  newsapp,
  IIITSlogo,
  NSSlogo,
  abhisargalogo,
  sqllogo,
  clogo,
  cpplogo,
  javalogo,
  linuxlogo,
  SHGS_School,
  Gredient_IIITS_logo,
  IR_Project_logo,
  BeSocial,
  VelvetHomes,
  CHM
} from "../assets";



export const resumeURL = "https://drive.google.com/file/d/1hN6APET5_ZMvAXRyUGF8ZDa3NIaaKGZp/view?usp=sharing";
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
  }, {
    id: "resume",
    title: "Resume",
    link: resumeURL,
  }
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [

  {
    name: "C++",
    icon: cpplogo,
  },
  {
    name: "C",
    icon: clogo,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SQL",
    icon: sqllogo,
  },
  {
    name: "Linux",
    icon: linuxlogo,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educationData = [
  { name: "Indian Institute of Information Technology, Sri City(IIITS)", branch: "BTech in Computer Science and Engineering (CSE)", date: "November 2021 - May 2025", cgpa: "CGPA : 7.2", image: IIITSlogo },
  {
    name: "Smt. Chandibai Himathmal Mansukhani College",
    branch: "Higher Secondary Education (XII)",
    // date: "Aug 2019- Aug 2021",
    cgpa: "Grade : 86%",
    image: CHM,
  },

  // { name: "Smt. H. G. Shroff High School, Nandurbar, Maharashtra", branch: "Secondary School Education (X)", date: "June 2018- May 2019", cgpa: "Grade : 95.00%", image: SHGS_School },

]

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "BizOAlly",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQEl-qOFP1Fm9A/company-logo_200_200/company-logo_200_200/0/1700422571199/bizoally_logo?e=1738195200&v=beta&t=iog2-xaCqHUj0_l6s73ay6gP9JRbAM2QlYxalRbXK5w",
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    points: [
      "Contributed to the user dashboard by developing 5 APIs for managing and updating user profiles, enhancing backend functionality and user experience",
      "Worked on WebSocket for real-time chat, communication between users and the support team for issue resolution",
      "Built APIs for reporting bugs and website issues, improving user feedback and enhancing site reliability.",
    ],
  },
  {
    title: "Gradient:Member",
    company_name: "Programming Club of IIIT Sri City",
    icon: Gredient_IIITS_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2024",
    points: [
      "It is Programming club of IIIT SriCity. Worked as a Member in Academic year 2023-24 and now promoted as Technical Lead",
      "Conducted 4 programming sessions and competitions for students to enhance their DSA coding skills.",
    ],
  },
  {
    title: "Chegg Teaching Expert",
    company_name: "Chegg India",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQG8VKEvS_lWog/company-logo_200_200/company-logo_200_200/0/1630649929088/chegg_inc__logo?e=1738195200&v=beta&t=Ne5erCYI0bs3LArERdYyjeh2B2PXwz1eKwHDPD09Wf4",
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Guided and supported students in understanding complex computer science concepts, offering personalized explanations to facilitate deeper learning and improve academic performance.",
      "Solved diverse computer science problems daily, refining skills in algorithmic thinking, debugging, and technical communication, contributing to a 90%+ student satisfaction rate.",
    ],
  },
];

const volunteerExperience = [
  {
    title: "NSS Core Volunteer",
    company_name: "@NSS-IIITS",
    image: NSSlogo,
    date: "May 2022 - Aug 2023",
    points: [
      "Active participant in various government-related drives through NSS, contributing to community development initiatives.",
      "Organized events for village children to explore IIITS institute and its facilities.",
      "Led educational programs introducing rural students to the institute environment.",
    ],
  },
  {
    title: "Abhisarga 2024 : Organizer",
    company_name: "Annual Fest of IIIT Sri City",
    image: abhisargalogo,
    date: "March 2024",
    points: [
      "Organizer of the annual fest of Indian Institute of Information Technology, Sri City, contributing to the successful execution of the event.",
      "Played a key role in planning and coordinating various aspects of the fest, ensuring a seamless and engaging experience for participants.",
      "Led Accommodation team of the fest to ensure a comfortable stay for guests and participants.",
    ],
  },
]

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
    name: "ViColab",
    description:
      "Built a secure and interactive video conferencing platform with Clerk for authentication and session management, supporting 100+ participants. Integrated Stream.io for features like meeting scheduling, recording, screen sharing, and participant management, ensuring seamless communication. Designed a responsive interface with Next.js and Shadcn, enhancing user interaction with recording capabilities and participant pinning.",
    tags: [
      {
        name: "ReactJS",
        color: "white-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "purple-text-gradient",
      },
      {
        name: "ShadCN",
        color: "pink-text-gradient",
      },
      {
        name: "Stream-API",
        color: "green-text-gradient",
      },
    ],
    image: Vicolab,
    source_code_link: "https://github.com/spiritualLucifer/Vicolab",
    project_url: "https://vicolab.vercel.app/",
  },
  {
    name: "Velvet Homes",
    description:
      "Developed Velvet Homes, a full-stack e-commerce web app with three dashboards (User, Admin, Company) using ExpressJS for efficient routing. Integrated secure authentication with bcrypt, JWT tokens, and session handling, and added Stripe for seamless payment processing.",
    tags: [
      {
        name: "ReactJS",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "purple-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "purple-text-gradient",
      },
      {
        name: "ReduxJS",
        color: "purple-text-gradient",
      },
    ],
    image: VelvetHomes,
    source_code_link: "https://github.com/spiritualLucifer/eCom",
    project_url: "https://velvet-wbd.vercel.app/",
  },
  {
    name: "BeSocial",
    description:
      "Built BeSocial, a social media app using ReactJS, ExpressJS, MongoDB, and WebSocket. Enabled robust user profile updates with NodeMailer for OTP generation and password resets, Multer for image uploads, and efficient user search functionality. Architected a real-time chat solution using WebSocket to enhance communication, handling 1000+ active users simultaneously.",
      tags: [
        {
          name: "ReactJS",
          color: "white-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "purple-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJS",
          color: "green-text-gradient",
        },
        {
          name: "WebSocket",
          color: "purple-text-gradient",
        },
        {
          name: "ContextAPI",
          color: "purple-text-gradient",
        },
        {
          name: "nodeMailer",
          color: "green-text-gradient",
        },{
          name: "Multer",
          color: "pink-text-gradient",
        }
      ],
    image: BeSocial,
    source_code_link: "https://github.com/spiritualLucifer/BeSocial",
    project_url: "https://github.com/spiritualLucifer/BeSocial",
  },
  // {
  //   name: "Find My Doctor",
  //   description:
  //     "Developed a health domain Information Retrieval system for finding doctors based on user preferences, featuring search by city, specialty, and locality. The system displays the top 20 relevant results, integrates user feedback for improved relevance, and visualizes performance with a dynamic Precision-Recall (P-R) curve.",
  //   tags: [
  //     {
  //       name: "Django",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "Python",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Information Retrieval",
  //       color: "purple-text-gradient",
  //     },
  //     {
  //       name: "Web Scraping",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Html CSS",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: IR_Project_logo,
  //   source_code_link: "https://github.com/KartikNP31/Information-Retrieval-DoctorFinder.git",
  //   project_url: "https://github.com/KartikNP31/Information-Retrieval-DoctorFinder.git",
  // },
];

export { services, technologies, experiences, testimonials, projects, volunteerExperience ,educationData};
