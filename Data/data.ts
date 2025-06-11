export const BaseInfo = {
  name: "Baljeet Singh",
  position: "Full Stack Developer",
  description:
    "Full Stack Developer with 3.4 years in front-end and 2.4 years in software development. Proficient in React, Next.js, TypeScript, Node.js, Express, and MongoDB. Passionate about building scalable and responsive web applications.",
  profilePic: "/images/hero.png",
};


export const aboutInfo = {
  title: "Crafting Scalable Web Solutions with Precision",
  description:
    "With a solid background in frontend and backend technologies, I specialize in creating responsive, performant, and user-centric applications. My focus is on writing clean code, solving real-world problems, and delivering exceptional digital experiences.",
  client: "10+",
  experience: "3+",
  project: "50+",
  website: "10+",
};

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Robust web applications using React, Next.js, Node.js, and MongoDB.",
    icon: "/images/s1.png",
  },
  {
    id: 2,
    title: "Responsive UI Design",
    description: "User-first designs with HTML, CSS, Tailwind, and Bootstrap.",
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
    description: "Real-time alerts and email systems using Nodemailer and WebSockets.",
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
    id: 3,
    image: "/images/p3.png",
    url: "https://linkdin-posts-viewer.netlify.app/",
  },
  {
    id: 4,
    image: "/images/p4.png",
    url: "https://baljeetgirmantech.netlify.app/",
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
  { id: 2, title: "JavaScript", image: "/images/js.svg", percent: "85%" },
  { id: 3, title: "TypeScript", image: "/images/ts.svg", percent: "80%" },
  { id: 4, title: "Node.js", image: "/images/node.svg", percent: "80%" },
  { id: 5, title: "Next.js", image: "/images/next.webp", percent: "85%" },
  { id: 6, title: "MongoDB", image: "/images/mongo.svg", percent: "75%" },
  { id: 7, title: "MySQL", image: "/images/sql.svg", percent: "70%" },
  { id: 8, title: "HTML", image: "/images/html.svg", percent: "90%" },
  { id: 9, title: "CSS", image: "/images/css.svg", percent: "90%" },
  { id: 10, title: "Redux", image: "/images/redux.svg", percent: "75%" },
  { id: 11, title: "Tailwind CSS", image: "/images/tailwind.svg", percent: "90%" },
];
export const clientReviews = [
  {
    name: "John Doe",
    review:
      "Exceptional service! The team delivered exactly what we needed on time. Very professional",
    rating: 5,
    profession: "Marketing Manager",
    image: "/images/u1.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "Highly skilled developers who understand the client's vision and execute perfectly.",
    rating: 4.8,
    profession: "Business Owner",
    image: "/images/u2.jpg",
  },
  {
    name: "Michael Johnson",
    review:
      "Great communication and excellent results. Our new site performs beautifully.",
    rating: 4.6,
    profession: "Project Coordinator",
    image: "/images/u3.jpg",
  },
  {
    name: "Emily Brown",
    review:
      "Professional, efficient, and highly knowledgeable. Would definitely recommend their services!",
    rating: 4.9,
    profession: "Creative Director",
    image: "/images/u4.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Top Web Development Trends to Watch in 2024",
    summary:
      "Explore the key web development trends for 2024 and their impact on your business.",
    date: "August 18, 2024",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Custom Web Application",
    summary:
      "Discover why custom web applications are crucial for driving business growth and efficiency.",
    date: "August 10, 2024",
    image: "/images/b2.jpg",
  },
  {
    id: 3,
    title: "The Importance of Website Speed Optimization",
    summary:
      "Understand how website speed impacts user experience and learn essential optimization tips.",
    date: "July 25, 2024",
    image: "/images/b3.jpg",
  },
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
      'Built and deployed 5+ applications using React, TypeScript, Next.js, Node.js, and SQL. Solved 15+ technical issues, collaborated with a 10+ member team, and improved efficiency by 20%.',
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
