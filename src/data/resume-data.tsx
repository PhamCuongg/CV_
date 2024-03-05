import {
  VNPT
} from "@/images/logos";
import { GitHubIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Pham Tien Cuong",
  initials: "PC",
  location: "Binh Thanh, TP.HCM, VIETNAM",
  locationLink: "https://www.google.com/maps/place/B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8121348,106.6970697,14z/data=!3m1!4b1!4m6!3m5!1s0x3175289f02a8eae9:0x34ec9d90e055cde3!8m2!3d10.8105831!4d106.7091422!16s%2Fm%2F027t1kv?entry=ttu",
  about:
    "Web/App Developer focused on building products with extra attention to detail",
  summary:
    "As a web and app developer, my goal is to consistently deliver outstanding technical solutions and user experiences. With expertise in ReactJS, MongoDB, Flutter, and Firebase, I am committed to tackling challenges and maintaining a strong focus on continuous learning. I aspire to contribute my skills to dynamic projects, staying abreast of industry trends, and making impactful advancements in the ever-evolving fields of web and app development.",
  avatarUrl:"https://raw.githubusercontent.com/PhamCuongg/avatars/main/273400297_3116463305278293_6506516498888198548_n-removebg-preview.png",
  personalWebsiteUrl: "https://portfoliophamcuong.netlify.app/",
  contact: {
    email: "bomwithme@gmail.com",
    tel: "+84866783837",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PhamCuongg",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Ho Chi Minh City University of Technology",
      degree: "Information Technology",
      text: "GPA: 2.98",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "VNPT IT - Area 2",
      link: "https://vnptit.vn/",
      badges: [],
      title: "Intern Mobile",
      logo: VNPT,
      start: "2023",
      end: "2023",
      description:
        "Applied Flutter expertise to develop user interfaces and interact with components, conducting in-depth research.Technologies: Flutter, Dart, Firebase",
      },
  ],
  skills: [
    "JavaScript",
    "React",
    "MongoDB",
    "SQLSever",
    "Java",
    "Flutter",
    "Dart",
    "Firebase",
    "SQLite"
  ],
  projects: [
    {
      title: "Netflix Clone",
      team:"1 people",
      techStack: [
        "React",
        "MongoDB"
      ],
      description: "A platform to build a website to watch free movies online",
    },
    {
      title: "Ecommerce Website",
      team:"1 people",
      techStack: ["React", "MongoDB", "Tailwind.css"],
      description:
        "Sales and business development platform",
    },
    {
      title: "CTub App",
      team:"1 people",
      techStack: ["Flutter", "Dart", "Firebase"],
      description:
        "Online music listening application",
    },
    {
      title: "Music App",
      team:"1 people",
      techStack: ["Java", "SQLITE"],
      description:
        "Offline music listening application",
    },
  ],
} as const;
