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
  subtitle: 'An aspiring Software Developer.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am an undergraduate junior studying Computer Science and Mathematics at the University of Washington. I am passionate about web/front-end development, algorithms, and using computer science to create a positive social impact.',
  paragraphTwo: 'I love working in fast-paced environments where I can solve unique and challenging problems by developing innovative solutions. Experimenting with new technologies and working with data is my passion.',
  paragraphThree: 'I am enthusiastic about opportunities for continued growth and improvement in becoming a more qualified industry-level developer where I can fully apply my academic experience!',
  resume: 'https://raj-resume.theshy707.vercel.app/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Mathematically Modeling COVID-19',
    info: 'A research project that focused on mathematically modeling (primarily through epidemiological compartmental models) the initial outbreak of COVID-19 within the population of the Hubei Province in the People\'s Republic of China based on data reported by the World Health Organization from February 2020 to early March 2020 and utilizing initial academic research conducted during that time frame.',
    info2: 'MATLAB was used to write the functions for each compartmental model and to generate the plots for growth rates and stability analysis. In addition, LaTeX was utilized to write the final report document containing my analysis.',
    url: 'https://amath383-paper-site-git-main.theshy707.vercel.app/',
    repo: 'https://github.com/The-Shy7/modeling-covid-19', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Miscarriage Statistical Analysis',
    info: 'A research project that focused on utilizing and examining existing pregnancy data (primarily from the National Survey of Family Growth conducted by the National Center for Health Statistics) to predict a person\'s risk of miscarriage.',
    info2: 'Python (through Jupyter Notebooks) was used to scrape data hosted by the United States government on an FTP server. The Pandas and NumPy libraries were utilized to clean, filter, and feature engineer the data. Lastly, the Matplotlib and Seaborn libraries were used to construct and generate the statstical graphics and data visualizations present within the final analysis report.',
    url: 'https://math381-paper-site.theshy707.vercel.app/',
    repo: 'https://github.com/The-Shy7/math-381-predicting-miscarriage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Pokemon Data Analysis/Visualization',
    info: 'An exploratory analysis of a dataset of all current Pokemon to better understand the shape & structure of the data, identify data quality issues, investigate initial questions, and develop preliminary insights & hypotheses.',
    info2: 'The data visualizations were constructed using Tableau and JavaScript was utilized to load the CSV file and attach the visualizations within the Observable Notebook.',
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
  email: 'tahmit@cs.washington.edu',
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
