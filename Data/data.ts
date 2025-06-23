export const BaseInfo = {
  name: "Baljeet Singh",
  position: "Full Stack Developer",
  description:
    "Full Stack Developer with 3.4 years in frontend and 2.4 years in backend development. Proficient in React, Next.js, TypeScript, Node.js, Express, and MongoDB. Passionate about building scalable and responsive web applications.",
  profilePic: "/images/hero.png",
};


export const aboutInfo = {
  title: "Building Impactful Digital Experiences with Scalable Architecture",
  description:
    "I bring 3+ years of hands-on experience across the full web stack, delivering high-performance, scalable applications tailored to user needs. With a passion for clean code and intuitive design, I turn complex challenges into seamless digital solutions that drive real results.",
  client: "2+",
  experience: "3+",
  project: "50+",
  website: "10+",
};

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Robust, end-to-end web applications with React, Next.js, Node.js, and MongoDB.",
    icon: "/images/s1.png",
  },
  {
    id: 2,
    title: "Responsive UI Design",
    description: "Responsive, user-first interfaces using HTML, CSS, Tailwind CSS, and Bootstrap.",
    icon: "/images/s4.png",
  },
  {
    id: 3,
    title: "API Development & Integration",
    description: "RESTful APIs and third-party integrations using Express.js and Postman.",
    icon: "/images/s3.png",
  },
  {
    id: 4,
    title: "Database Solutions",
    description: "Efficient and optimized MongoDB and MySQL databases.",
    icon: "/images/s5.png",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Boost user engagement and reduce load times with SSR and indexing.",
    icon: "/images/s7.png",
  },
  {
    id: 6,
    title: "Email & Notification Systems",
    description: "Real-time notifications and transactional emails using Nodemailer and WebSockets.",
    icon: "/images/s6.png",
  },
];


export const projectData = [
  {
    id: 1,
    image: "/images/p1.png",
    url: "https://velvet-haven.netlify.app/",
  },
  {
    id: 2,
    image: "/images/p2.png",
    url: "https://royalmatrimonial.com/",
  },
  {
    id: 7,
    image: "/images/p7.png",
    url: "https://dev.royalmatrimonial.com/Create_profile",
  },
  {
    id: 8,
    image: "/images/p8.png",
    url: "https://www.safarmentor.com/",
  },
  {
    id: 9,
    image: "/images/p9.png",
    url: "https://ordertracking.gomechanic.in/order-history",
  },
  {
    id: 10,
    image: "/images/p10.png",
    url: "https://www.edustoke.com/",
  },
  {
    id: 12,
    image: "/images/p12.png",
    url: "https://liberary.netlify.app/",
  },
  {
    id: 3,
    image: "/images/p3.png",
    url: "https://linkdin-posts-viewer.netlify.app/",
  },
  {
    id: 11,
    image: "/images/p11.png",
    url: "https://baljeetgirmantech.netlify.app/",
  },
  {
    id: 4,
    image: "/images/p4.png",
    url: "https://baljeetcityweather.netlify.app//",
  },
  {
    id: 5,
    image: "/images/p5.png",
    url: "https://criptomax.netlify.app/",
  },
  {
    id: 6,
    image: "/images/p6.png",
    url: "https://todofrontendbaljeet.netlify.app/",
  },
];


export const skillsData = [
  { id: 1, title: "React", image: "/images/react.svg", percent: "90%" },
  { id: 8, title: "HTML", image: "/images/html.svg", percent: "95%" },
  { id: 9, title: "CSS", image: "/images/css.svg", percent: "95%" },
  { id: 2, title: "JavaScript", image: "/images/js.svg", percent: "90%" },
  { id: 5, title: "Next.js", image: "/images/next.webp", percent: "85%" },
  { id: 4, title: "Node.js", image: "/images/node.svg", percent: "75%" },
  { id: 6, title: "MongoDB", image: "/images/mongo.svg", percent: "75%" },
  { id: 7, title: "SQL & MySQL", image: "/images/sql.svg", percent: "70%" },
  { id: 10, title: "Redux", image: "/images/redux.svg", percent: "80%" },
  { id: 3, title: "TypeScript", image: "/images/ts.svg", percent: "80%" },
  { id: 11, title: "Tailwind CSS", image: "/images/tailwind.svg", percent: "90%" },
];

export const contactData = {
  phone: "+91-8685070017",
  email: "baljeetgunghas5@gmail.com",
  address: "New Delhi, India",
  linkdin: 'https://www.linkedin.com/in/dev-baljeet-gunghas-b6698421b/',
  github: 'https://github.com/BaljeetGunghas',
  instagram: 'https://www.instagram.com/baljeet_gunghas2/',
};

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: 'Royalmatrimonial',
    role: 'FullStack Engineer',
    duration: 'Feb 2023 – Mar 2025',
    description:
      'Built and deployed 2+ applications using React, TypeScript, Next.js, Node.js, and SQL. Solved 15+ technical issues, collaborated with a 10+ member team, and improved efficiency by 20%.',
  },
  {
    company: 'GoMechanic',
    role: 'Frontend Engineer',
    duration: 'Oct 2022 – Feb 2023',
    description:
      'Developed over 20 web pages, maintained existing ones, and collaborated using HTML, CSS, Postman, Figma, and Node.js. Enhanced user experience and applied front-end best practices.',
  },
  {
    company: 'FareGarage',
    role: 'Frontend Engineer',
    duration: 'Jun 2022 – Oct 2022',
    description:
      'Led front-end development using HTML, CSS, JavaScript, and Bootstrap. Improved user interaction by 30% and ensured standards through regular updates.',
  },
  {
    company: 'edustoke',
    role: 'Frontend Engineer',
    duration: 'Mar 2022 – Jun 2022',
    description:
      'Created over 40 web pages using Figma designs. Optimized performance with CSS (SASS), improved mobile engagement by 40%, and reduced merge conflicts by 20% using Git/GitHub workflows.',
  },
];
