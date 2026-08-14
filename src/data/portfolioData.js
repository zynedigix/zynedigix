import aatralImage from "../assets/images/portfolio/aatral.jpg";
import aurelixImage from "../assets/images/portfolio/aurelix3d.jpg";
import caFinanceImage from "../assets/images/portfolio/ca-finance.jpg";
import eshopImage from "../assets/images/portfolio/eshop.jpg";
import pyroshieldImage from "../assets/images/portfolio/pyroshield.jpg";
import fitauraImage from "../assets/images/portfolio/fitauro.jpg";

const projects = [
  {
    slug: "aatral-yoga",
    title: "Aatral Yoga",
    category: "Wellness Website",
    description:
      "Premium yoga and wellness website featuring glassmorphism, immersive layouts and a calm user experience.",
    image: aatralImage,
    url: "https://aatralyoga.com/",
    tags: ["React", "UI/UX", "Wellness"],
  },

  {
    slug: "aurelix-3d",
    title: "Aurelix 3D",
    category: "Interactive 3D",
    description:
      "A cinematic WebGL experience showcasing immersive storytelling with premium 3D interactions.",
    image: aurelixImage,
    url: "https://aurelix3d.vercel.app/",
    tags: ["Three.js", "WebGL", "Immersive"],
  },

  {
    slug: "ca-finance",
    title: "CA Finance",
    category: "Fintech",
    description:
      "A clean finance dashboard designed for trust, clarity and intelligent business analytics.",
    image: caFinanceImage,
    url: "https://ca-sachin-associates.vercel.app/",
    tags: ["Dashboard", "Finance", "UX"],
  },

  {
    slug: "e-shop-computers",
    title: "E-Shop Computers",
    category: "3D Ecommerce",
    description:
      "A premium ecommerce experience with immersive visuals and conversion-focused design.",
    image: eshopImage,
    url: "https://eshop-computers.vercel.app/",
    tags: ["Ecommerce", "3D", "Conversion"],
  },

  {
    slug: "pyroshield",
    title: "Pyroshield",
    category: "Industrial",
    description:
      "Corporate website crafted for an industrial safety company with modern branding and UX.",
    image: pyroshieldImage,
    url: "https://pyroshield.vercel.app/",
    tags: ["Corporate", "Branding", "UX"],
  },

    {
    slug: "fitaura",
    title: "FitAura",
    category: "Wellness / Health Tech",
    description:
      "A modern 30-day wellness platform designed around personalized guidance, healthy habits, nutrition, movement, and progress tracking.",
    image: fitauraImage,
    url: "https://fitaurahealth.vercel.app/",
    tags: ["Product Design", "UX/UI", "Wellness"],
  },
];

export default projects;
