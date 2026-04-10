export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
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
    title: "FreshCart E-Commerce App",
    des: "A modern e-commerce frontend built with Next.js and TypeScript, focused on scalable UI structure and reusable components.",
    img: "/p1.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/react-icons.svg",
      "/fm.svg",
    ],
    link: "https://route-ecommerce-next-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media \'FaceHook\' App",
    des: "A React JS social media app that showcases interactive frontend UI and component-based app structure.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/react-icons.svg",
      "/fm.svg",
    ],
    link: "https://react-social-media-app-ochre.vercel.app/",
  },
  {
    id: 3,
    title: "Photo Gallery \'Adasa\' App",
    des: "A REAL React.js frontend App that is used for a photographer's portfolio, showcasing a modern and responsive design with reusable components.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "/bootstrap.svg",
      "/js.png",
      "/Font_Awesome.svg.png",
      "/fm.svg",
    ],
    link: "https://adasa-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Nutrition Plan Guide App",
    des: "A vanilla JavaScript frontend app for a nutrition guide with a lightweight interface and content-driven experience.",
    img: "/p4.svg",
    iconLists: [
      "/js.png",
      "/bootstrap.svg",
      "/Font_Awesome.svg.png",
      "/fm.svg",
      "/gsap.svg",
    ],
    link: "https://asaied7397.github.io/nutri_plan/",
  },
  {
    id: 5,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using vanilla JavaScript and Nasa's API.",
    img: "/p5.svg",
    iconLists: [
      "/js.png",
      "/html.png",
      "/css.webp",
      "/Font_Awesome.svg.png",
      "/gsap.svg",
    ],
    link: "https://asaied7397.github.io/COSMOS-Space-Dashboard/",
  },
  {
    id: 6,
    title: "Quiz Master - Interactive Quiz App",
    des: "An engaging quiz app built with vanilla JavaScript, offering a fun and interactive way to test your knowledge across various topics.",
    img: "/p6.svg",
    iconLists: [
      "/js.png",
      "/html.png",
      "/css.webp",
      "/Font_Awesome.svg.png",
      "/gsap.svg",
    ],
    link: "https://asaied7397.github.io/Quiz_App/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
    name: "Mina Michael",
    title: "Director of AlphaStream Technologies",
    image: "/profile.svg",
  },
  {
    quote:
      "Working with Ahmed was an outstanding experience from start to finish. He demonstrated a strong ability to translate our ideas into a clean, modern, and highly responsive interface. What impressed us the most was his attention to detail and his commitment to delivering exactly what was promised, on time. Ahmed was always proactive in suggesting improvements that enhanced both the user experience and performance. His professionalism and technical skills make him a valuable asset to any team.",
    name: "Ahmed Hassan",
    title: "Founder of NileTech Solutions",
    image: "/profile2.jpg",
  },
  {
    quote:
      "Ahmed exceeded our expectations in every phase of the project. From the initial planning to the final delivery, he maintained clear communication and a structured workflow. His ability to build scalable and reusable components made a noticeable difference in the quality of our product. Beyond his technical expertise, Ahmed has a great sense of design and user experience, which helped us achieve a polished and modern interface. I would highly recommend him for any frontend development work.",
    name: "Omar Khaled",
    title: "Product Manager at Cairo Digital Hub",
    image: "/profile3.jpg",
  },
  {
    quote:
      "Collaborating with Ahmed was a smooth and highly productive process. He quickly understood our requirements and transformed them into a visually appealing and performance-optimized application. His work reflects both strong technical knowledge and a clear understanding of modern frontend standards. Ahmed consistently delivered high-quality results and was flexible when adapting to changes during development. We are extremely satisfied with the final outcome and look forward to working with him again in the future.",
    name: "Youssef Mahmoud",
    title: "Product Manager at Delta Innovations",
    image: "/profile4.jpg",
  },
  {
    quote:
      "Working with Ahmed was an exceptional experience. He not only delivered a clean and modern interface, but also showed a deep understanding of user experience and performance optimization. Throughout the project, he was highly responsive, detail-oriented, and always open to feedback. What stood out the most was his ability to take ownership and suggest improvements that genuinely enhanced the final product. I would absolutely recommend Ahmed to anyone looking for a reliable and talented frontend developer.",
    name: "Salma El-Sayed",
    title: "UI/UX Lead at Creative Minds Studio",
    image: "/profile5.jpg",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js and Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/asaied7397",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmed-saied-4a0244342/",
  },
];
