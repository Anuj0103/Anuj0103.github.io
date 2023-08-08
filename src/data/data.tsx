import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import LeetCodeIcon from '../components/Icon/LeetCodeIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio',
  description: "Portfolio site built with react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anuj Dhingra.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100"></strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am currently a Final Year Graduate in Computer Science Engineering from Maharaja Agrasen Institute of
        Technology. Throughout my academic journey, I have developed a deep passion for giving back to the community,
        and my goal is to integrate this passion into my engineering career.Through my personal portfolio, I aim to
        showcase my journey as a student, engineer, and contributor to the open source community. I invite you to
        explore my projects, experiences, and the impact I have made. Together, we can explore ways to make a positive
        difference in the world through engineering and community-focused initiatives.
        <br />
        <br />
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/17_wlNH8Mg11ovy_Ay78aEc-6u_9jugMK/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      // Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
"Hello! I'm nuj Dhingra, a passionate Computer Science enthusiast based in Delhi, India. With a B.Tech in Computer Science & Engineering from Maharaja Agrasen Institute of Technology, I'm driven by the art of creating technology solutions. My skills span programming in languages like C++, Python, and Java, with a solid foundation in Data Structures, Algorithms, and Object-Oriented Programming.\n\nI find my thrill in blending technology with creativity, evident in my web development journey. As a Web Dev Intern at TWOWAITS, I optimized user interfaces using ReactJS, NodeJS, and HTML5, resulting in improved performance and user engagement.\n\nDiving into blockchain tech, I've explored Ethereum, Smart Contracts, and decentralized apps (DApps), contributing to projects that reshape digital transactions. My projects like Smart_Brain, using machine learning, and Covicure, a COVID Resource Exchange, highlight my versatility.\n\nAs a dedicated learner, adaptable collaborator, and problem solver, I've secured 2nd positions in notable hackathons and even published a research paper. Join me on this exciting journey of innovation and impact!\n\nThank you for visiting my portfolio.",
  aboutItems: [
    {label: 'Location', text: 'New Delhi', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Traveling, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'Maharaja Agrasen Institute Of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Available for Intern/Full Time Roles', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'XML',
        level: 6,
      },
      {
        name: 'jQuery',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Redux',
        level: 6,
      },
      {
        name: 'Material UI',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Blockchain development',
    skills: [
      {
        name: 'Web3.js',
        level: 5,
      },
      {
        name: 'Smart Contracts',
        level: 7,
      },
      {
        name: 'Solidity',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'election_vote_dapp',
    description: 'A decentralized voting application built using blockchain',
    url: 'https://github.com/Anuj0103/election_vote_dapp',
    image: porfolioImage1,
  },
  {
    title: 'AI-NFT-GENERATOR-APP',
    description: '',
    url: 'https://github.com/Anuj0103/AI-NFT-GENERATOR-APP',
    image: porfolioImage2,
  },
  {
    title: 'todoListDapp',
    description: 'A todo list app created with blockchain',
    url: 'https://github.com/Anuj0103/todoListDapp',
    image: porfolioImage3,
  },
  {
    title: 'project_cryptoverse',
    description: 'Crpytocurrency App powered by RapidAPI',
    url: 'https://github.com/Anuj0103/project_cryptoverse',
    image: porfolioImage5,
  },
  {
    title: 'P2-facerecognitionbrain',
    description: 'React project based on face recognition',
    url: 'https://github.com/Anuj0103/P2-facerecognitionbrain',
    image: porfolioImage6,
  },
  {
    title: 'Covi-Cure',
    description:
      'Fully-Fledged and Completely Independent Website/Application that can be directly used by any Individual or any Organisation for the Betterment of the Society.',
    url: 'https://github.com/Anuj0103/Covi-Cure',
    image: porfolioImage7,
  },
  {
    title: 'P4-Tours-Project-React',
    description: '',
    url: 'https://github.com/Anuj0103/P4-Tours-Project-React',
    image: porfolioImage7,
  },
  {
    title: 'P5-Reviews-React',
    description:
      '',
    url: 'https://github.com/Anuj0103/P5-Reviews-React',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019-2023',
    location: 'Maharaja Agrasen Institute Of Technology',
    title: 'Computer Science Engineering',
    content: (
      <p>
        <strong>Percentage: </strong>
        86.867 %<br />
        <strong>CGPA: </strong>
        9.280
      </p>
    ),
  },
  {
    date: '2019',
    location: 'Bal Bharati Public School',
    title: 'XII',
    content: (
      <p>
        <strong>Percentage: </strong>
        94.8 %
      </p>
    ),
  },
  {
    date: '2017',
    location: 'Bal Bharati Public School',
    title: 'X',
    content: (
      <p>
        <strong>CGPA: </strong>
        10
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 – Jul 2022',
    location: 'TWOWAITS',
    title: 'Web Development Intern',
    content: (
      <p>
        <ul style={{listStyleType: 'circle'}}>
          <li>
            Collaborated on the development of User Interface applications and highly scalable, transactional systems.
          </li>
          <li>
            Leveraged my expertise in <strong>HTML5, CSS3, JavaScript, ReactJS, and NodeJS </strong>to create engaging
            and dynamic web applications. Contributed to significant performance improvements, resulting in a{' '}
            <strong>40% reduction in page load time </strong>and a{' '}
            <strong>25% increase in overall application speed.</strong> Successfully integrated and utilized modern
            technologies, enhancing the user experience and increasing customer engagement on the platform.
          </li>
          <li>
            Contributed to scalable system development,{' '}
            <strong>resulting in a 30% increase in monthly active users.</strong>
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Aug 2021 – Nov 2021',
    location: 'ZYLICON HACKDEV TECHNOLOGIES',
    title: 'React Developer Intern',
    content: (
      <p>
        <ul style ={{listStyleType: 'circle'}}>
          <li>
            {' '}
            Worked on creating robust high-quality code. Code optimization for max performance across different
            browsers, ensuring maximum efficiency. Involved designing in web pages using{' '}
            <strong>HTML5, CSS3, React.js, Redux, Material UI Framework </strong>to design visually appealing web pages.{' '}
          </li>
          <li>
            {' '}
            Implemented stable React components and stand-alone functions for future scalability and integration. ·
            <strong>Achieved a significant 30% increase in page loading speed,</strong> resulting in improved website
            responsiveness and <strong>successfully reduced bounce rates by 20%, </strong>enhancing the overall user
            experience.
          </li>
        </ul>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: `I'm currently looking for summer internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me.`,
  items: [
    {
      type: ContactType.Email,
      text: 'anujdhingra01@gmail.com',
      href: 'mailto:anujdhingra01@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New Delhi, India',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'Anuj0103',
      href: 'https://github.com/Anuj-1-3',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Anuj0103'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anuj-dhingra01/'},
  {label: 'Leetcode', Icon: LeetCodeIcon, href: 'https://leetcode.com/anujdhingra01/'},
];
