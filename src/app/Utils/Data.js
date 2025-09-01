import COVID from '../assets/COVID.png'
import NIKE from '../assets/NIKE.png'
import portfolio  from '../assets/portfolio.png'
import ebook from '../assets/ebook.png'
import Library from '../assets/library.png'
import Security from '../assets/security.png'
export const projects = [
  {
    id: 0,
    title: "covid-19",
    description: "Designed a responsive website to spread COVID awareness using HTML, CSS, and Bootstrap.",
    Image: COVID,
    githubLink: "https://github.com/laibaSarfraz20/covid2",
    liveLink: "https://lighthearted-crostata-7e4290.netlify.app/",
  }, {
    id: 1,
    title: "Nikee",
    description: "Developed a responsive Nike-themed website showcasing modern design.",
    Image: NIKE,
    githubLink: "https://github.com/laibaSarfraz20/NIKEE",
    liveLink: "https://sweet-eclair-8d7f38.netlify.app/",
  },
  {
    id: 2,
    title: "Ebook",
    description:
      "Crafted an engaging e-book website with HTML, CSS, and JavaScript (responsiveness pending).",
   Image :ebook,
    githubLink: "https://github.com/laibaSarfraz20/my-e-book",
    liveLink: "https://steady-zuccutto-6ce338.netlify.app",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A simple Portfolio",
    Image:portfolio,
    githubLink: "https://github.com/laibaSarfraz20/laibasarfraz-portfolio",
    liveLink: "laibasarfraz-portfolio.vercel.app",
  },
  {
    id: 4,
    title: "Library",
    description:"A python project that manages book records.",
    Image:Library,
    githubLink: "https://github.com/laibaSarfraz20/Personal-Library-Manager-Streamlit-master",
    liveLink: "https://projectpy-2xun5fjqccgxmexv2mopbj.streamlit.app/",
  },
  {
    id: 5,
    title: "Secure Data Encryption System ",
    description:
 "A python project that encrypts and decrypts data using cryptography library.",
    Image:Security,
    githubLink: "https://github.com/laibaSarfraz20/securitydatasystem-py-main",
    liveLink: "https://securedataencrptpy-imzvfppfxstzj2nujodbuv.streamlit.app/",
  },
];

export const skills = [
  {
    id: 1,
    skill: "JavaScript",
  },
  {
    id: 2,
    skill: "React.js",
  },
  {
    id: 3,
    skill: "Next.js",
  },
  {
    id: 4,
    skill: "Express.js",
  },
  {
    id: 5,
    skill: "MongoDB",
  },
  {
    id: 6,
    skill: "MySQL",
  },
  {
    id: 7,
    skill: "Tailwind",
  },
  {
    id: 8,
    skill: "Node.js",
  },
  {
    id: 9,
    skill: "Framer Motion",
  }, {
    id: 10,
    skill: "TypeScript",
  },{
   id: 11,
    skill: "Python",
  }
];

export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};
