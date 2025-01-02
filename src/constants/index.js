export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
   
  export const technologies = [
  
  {
    name: "CSS",
    icon: "/assets/icons/css.png",
  },
  
  {
    name: "C++",
    icon: "/assets/icons/cpp_logo.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/icons/javascript.png",
  },
  {
    name: "React JS",
    icon: "/assets/icons/reactjs.png",
  },
  {
    name: "Node JS",
    icon: "/assets/icons/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/icons/mongodb.png",
  },
  {
    name: "Tailwind",
    icon: "/assets/icons/tailwind.png",
  },
  {
    name: "Docker",
    icon: "/assets/icons/docker.png",
  },
  {
    name: "Git",
    icon: "/assets/icons/git.png",
  },
  {
    name: "Figma",
    icon: "/assets/icons/figma.png",
  },
  {
    name: "Redux",
    icon: "/assets/icons/redux.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.png",
  },
  {
    name: "ThreeJS",
    icon: "/assets/icons/threejs.svg",
  },
];


  // export const clientReviews = [
  //   {
  //     id: 1,
  //     name: 'Sumeet Judge',
  //     position: 'Founder of Ciferone',
  //     img: 'assets/review1.png',
  //     review:
  //       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mark Rogers',
  //     position: 'Founder of TechGear Shop',
  //     img: 'assets/review2.png',
  //     review:
  //       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  //   },
  //   {
  //     id: 3,
  //     name: 'John Dohsas',
  //     position: 'Project Manager at UrbanTech ',
  //     img: 'assets/review3.png',
  //     review:
  //       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ether Smith',
  //     position: 'CEO of BrightStar Enterprises',
  //     img: 'assets/review4.png',
  //     review:
  //       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  //   },
  // ];
  
  export const myProjects = [
    {
      title: 'Social Distribution',
      desc: 'A decentralized social media platform designed to empower users with seamless interconnectivity and enhanced privacy. Built using React, Django, and PostgreSQL, the platform enables a distributed communication network that redefines social interactions.',
      subdesc:
        'The platform features a REST API system that facilitates integration between different social media platforms, enabling users to view posts and follow others across multiple networks. Additionally, a robust inbox-based communication system has been implemented to allow the seamless exchange of posts, likes, and follow requests, enhancing user interaction and engagement across decentralized nodes.',
      href: 'https://social-distribution-romanshu-147d125d5a24.herokuapp.com',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png', // Correct logo path
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/icons/javascript.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/icons/html.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/icons/heroku.png',
        },
      ],
    },

    {
      title: 'Smart Mirror Web Application',
      desc: 'A responsive web application that provides real-time updates such as time, weather, news, and calendar events, built using modern web technologies. The application integrates APIs like OpenWeatherMap and NewsAPI to deliver dynamic and relevant information.',
      subdesc:
        'The application features customizable widgets for to-do lists and motivational quotes, ensuring user-friendly interactions with persistent preferences stored via local storage. Additionally, the Google Calendar API is seamlessly integrated to display upcoming events, utilizing OAuth 2.0 authentication for secure and intuitive calendar access.',
      href: 'https://smartmirror-ruby.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/icons/vuejs.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/icons/html.png',
        },
      ],
    },
    {
      title: 'OneStopShop',
      desc: 'An Android application designed for efficient inventory management and experiment tracking, built using Java and Firebase. The app follows the Model-View-Controller (MVC) design pattern to ensure robust and scalable architecture.',
      subdesc:
        'The app includes intuitive Home, Image Processing, and Library pages, offering users advanced features such as real-time data synchronization with Firebase, customizable ranking algorithms, and the ability to tag, filter, and sort items for efficient inventory and experiment management.',
      href: 'https://github.com/CMPUT301F23T27/OneStopShop',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Firebase',
          path: '/assets/icons/firebase_logo.png',
        },
        {
          id: 2,
          name: 'Java',
          path: 'assets/icons/java.png',
        },
        {
          id: 3,
          name: 'Android Studio',
          path: '/assets/icons/androidstudio.png',
        },
        {
          id: 4,
          name: 'Github',
          path: '/assets/icons/github.png',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Ciferone Inc.',
      pos: 'Software Developer Intern',
      duration: 'May 2023 - Aug 2023',
      title: "At Ciferone Inc., I developed and maintained scalable web applications using Java, Python, and JavaScript. I collaborated with cross-functional teams to deliver high-quality projects on time. My work included code reviews, debugging, performance optimization, and designing solutions for complex technical challenges. This role strengthened my problem-solving skills and emphasized teamwork in achieving project success.",
      icon: '/assets/Ciferone.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Space and Robotics club',
      pos: 'President',
      duration: 'May 2020 - May 2021',
      title: "Organized the first-ever virtual event, “Dive in and Get Lost in Black Holes,” creating an engaging platform for participants to explore space-related topics. Coordinated quizzes like “Space Race” and “Name the Constellations,” which attracted over 500 students. Additionally, led the organization of on-campus science fairs, fostering collaboration and curiosity among 300 students through interactive STEM activities.",
      icon: '/assets/Club.svg',
      animation: 'clapping',
    },
    // {
    //   id: 3,
    //   name: 'Notion',
    //   pos: 'Junior Web Developer',
    //   duration: '2019 - 2020',
    //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //   icon: '/assets/notion.svg',
    //   animation: 'salute',
    // },
  ];