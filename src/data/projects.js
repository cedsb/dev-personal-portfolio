import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiShadcnui, SiJsonwebtokens } from "@icons-pack/react-simple-icons"

export const projects = [
  {
    id: "edutrack",
    title: "EduTrack",
    shortDescription:
      "A web-based recommender system which guides Grade 10 students in choosing the right senior high school track.",

    longDescription:
      "EduTrack is a web-based recommender system developed as our capstone project to help Grade 10 students choose the most suitable Senior High School track. It is built using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for the database, with Random Forest machine learning models used to generate personalized track recommendations. The system uses JWT for secure authentication and Nodemailer to send OTPs for account verification. EduTrack evaluates students through multiple assessments analyzing their skills, interests, and career goals, providing guidance for students, counselors, and schools to make informed track decisions.",
      
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "ShadCN UI", icon: SiShadcnui },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
    liveDemoUrl: "https://tryedutrack.tech/",
    repositoryUrl: "https://github.com/cedsb/EduTrack",

    coverImage: "/images/edutrack/home.png",

    carousel: [
      "/images/edutrack/home.png",
      "/images/edutrack/dashboard.png",
      "/images/edutrack/certificate.png",
    ],

    screenShots: [
      "/images/edutrack/assessment-form.png",
      "/images/edutrack/assessment-results.png",
      "/images/edutrack/top-match.png",
    ]
  }
]