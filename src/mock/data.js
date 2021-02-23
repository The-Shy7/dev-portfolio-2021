import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Raj Talukder | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My developer portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Raj Talukder',
  subtitle: 'An aspiring Software Developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://raj-resume.theshy707.vercel.app/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Mathematically Modeling COVID-19',
    info: '',
    info2: '',
    url: 'https://amath383-paper-site-git-main.theshy707.vercel.app/',
    repo: 'https://github.com/The-Shy7/modeling-covid-19', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Miscarriage Statistical Analysis',
    info: '',
    info2: '',
    url: 'https://math381-paper-site.theshy707.vercel.app/',
    repo: 'https://github.com/The-Shy7/math-381-predicting-miscarriage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Pokemon Data Analysis/Visualization',
    info: '',
    info2: '',
    url: 'https://observablehq.com/@the-shy7/cse-412-homework-2@459',
    repo: 'https://github.com/The-Shy7/pokemon-data-analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Smogon Dex',
    info: '',
    info2: '',
    url: 'https://smogondex.now.sh/',
    repo: 'https://github.com/The-Shy7/smogondb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'React Chat App',
    info: '',
    info2: '',
    url: 'https://scuffedchat-97e31.firebaseapp.com/room11111',
    repo: 'https://github.com/The-Shy7/scuffedchat', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tahmit@uw.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tahmin-talukder-b860a5196/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/The-Shy7',
    },
    {
      id: nanoid(),
      name: 'angellist',
      url: 'https://angel.co/u/raj-talukder-781',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // false = disable GitHub stars/fork buttons
};
