export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Hobbies", link: "#hobbies" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[70vh] mr-[15px] mb-[15px]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/DSCF1333.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 mb-[15px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 mb-[15px]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 mb-[15px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 md:ml-[15px]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Audiophile E-Commerce website",
    des: "The AudioPhile project is a full-stack e-commerce app featuring an Angular frontend, a NestJS backend, and Nx for code management. It uses Stripe for transactions, Auth0 for authentication, NgRx for state management, and Tailwind CSS for styling. Jest and Cypress ensure reliable testing, creating a robust, modern e-commerce platform.",
    img: "/p1.png",
    iconLists: [
      "/angular.png",
      "/nestjs.png",
      "/nx.png",
      "/auth0.png",
      "/tailwind.png",
      "/cypress.png",
      "/jest.png",
    ],
    link: "https://github.com/Chilom-Mihai/E-Commerce-Website",
  },
  {
    id: 2,
    title: "Inventory Management System",
    des: "The Inventory Management System website enhances inventory tracking for companies, addressing common stock management issues. Developed with C#, HTML, CSS, and Bootstrap for the frontend, it uses ASP.NET Blazor for interactivity and SQL Server for the database. Strengthening inventory systems is crucial for business success.",
    img: "/ims.png",
    iconLists: [
      "/cSharp.svg",
      "/html.png",
      "/css.png",
      "/bootstrap.svg",
      "/blazor.png",
      "/sqlServer.png",
    ],
    link: "https://github.com/Chilom-Mihai/IMS",
  },
  {
    id: 3,
    title: "Ip Address Tracker",
    des: "This is a challenge on the Frontend Mentor where you can search an API and then you will be redirected on the map at that address, The challenge is to build out an IP Address Tracker app and get it looking as close to the design as possible",
    img: "/ipAddressTracker.png",
    iconLists: ["/html.png", "/sass.png", "/angular.png", "/js.png"],
    link: "https://github.com/Chilom-Mihai/IPAddressTracker",
  },
  {
    id: 4,
    title: "REST COUNTRIES API",
    des: "REST Countries API is a challenge from Frontend Mentor where you have a list of countries with informations about them. If you click a flag, you will be redirected to the detail page. This page contain all the informations about the country you selected. The details are selected dynamically from the data,json.",
    img: "/restCountries.png",
    iconLists: ["/html.png", "/sass.png", "/js.png", "/angular.png"],
    link: "https://github.com/Chilom-Mihai/RESTCountriesAPI",
  },
];

export const hobbies = [
  {
    title: "Hiking",
    quote: "Exploring trails and enjoying nature walks",
  },
  {
    title: "Running",
    quote: "Jogging or long-distance running",
  },
  {
    title: "Swimming",
    quote: "Going to a pool to swim for exercise or relaxation.",
  },
  {
    title: "Traveling",
    quote: "Exploring new places and experiencing different cultures",
  },
  {
    title: "Gym Workouts",
    quote: "Weightlifting, cardio workouts, or attending fitness classes.",
  },
  {
    title: "Football ",
    quote:
      "I watch every game of my favorite team in the stadium and play at least twice a month",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    company: "Web We Do",
    desc: "As a Junior Frontend Developer specializing in Angular, I've led notable projects like BeatBox for sugar company-farmer communication and Leya Print for PDF editing. I also used Ionic to build an online learning platform. My tech stack includes TypeScript, RxJS, NgRx, and Tailwind CSS, with a focus on performance optimization and cross-platform compatibility. I ensure high quality through thorough unit and end-to-end testing.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Computer System programmer",
    company: "Omeron Technologies",
    desc: "As a junior developer at Omeron Technologies, I focus on backend development for desktop applications. I implement key functionalities, ensure seamless UI-server interaction, and collaborate with experienced colleagues. My duties include coding, debugging, and optimizing backend performance, providing valuable hands-on experience and growth in software development.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelencer",
    desc: "As a freelance developer, I create dynamic and responsive web applications. Specializing in frontend development, I focus on implementing custom functionalities, optimizing performance, and ensuring a seamless user experience. My role involves collaborating with clients to meet their project goals and exceed expectations.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Chilom-Mihai",
  },
  {
    id: 2,
    img: "/facebook.svg",
    link: "https://www.facebook.com/mihaiaurelian.chilom.3/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mihai-chilom-3a6072228/",
  },
];

export const education = [
  {
    id: 1,
    university: "University of automation, computer and Electronics",
    city: "Craiova",
    profile: "Bachelors of Computer science, Computers in English",
    period: "2019-2023",
  },
  {
    id: 2,
    university: "University of automation, computer and Electronics",
    city: "Craiova",
    profile: "Information Systems for e-Business",
    master: true,
    period: "2023-Present",
  },
  {
    id: 3,
    university: "SKILLBRAIN Academy",
    desc: "At SKILLBRAIN Academy, I learn to create websites using React, starting with HTML, CSS, and JavaScript. I progress to building dynamic user interfaces with reusable components and smooth interactions. The academy offers practical projects and an internship for hands-on experience in frontend development.",
    period: "2024-Present",
  },
  {
    id: 4,
    university: "Nagarro",
    city: "Craiova",
    desc: "At Nagarro Academy, I gained expertise in HTML, CSS, and JavaScript through interactive sessions and comprehensive homework assignments. This experience helped me develop captivating, user-friendly web interfaces and laid a strong foundation for my journey as a frontend developer.",
    period: "2022-2023",
  },
];
