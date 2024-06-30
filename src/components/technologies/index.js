// components/TecnologieCarousel.js
import Marquee from "react-fast-marquee";
import React from "react";
import Image from "next/image";

const tecnologie = [
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/javascript.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/react.svg",
  },
  {
    name: "Next",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/nextdotjs.svg",
  },
  {
    name: "Expo",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/expo.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/tailwindcss.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/redux.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/git.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/github.svg",
  },
  {
    name: "GitLab",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/gitlab.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/firebase.svg",
  },
  {
    name: "i18next",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/i18next.svg",
  },
  {
    name: "docusaurus",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/docusaurus.svg",
  },
  {
    name: "netlify",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/netlify.svg",
  },
  {
    name: "vercel",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/vercel.svg",
  },
];

const TecnologieCarousel = () => {
  return (
    <div className="my-10">
      <Marquee
        gradient={false}
        speed={80}
        pauseOnClick={true}
        pauseOnHover
        delay={0}
        play={true}
        direction="left"
      >
        {tecnologie.map((tech) => (
          <div key={tech.name} className="tecnologie-card mx-8 text-center">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="icon-background mx-auto"
            />
            <span className="block mt-2 text-lg font-semibold">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TecnologieCarousel;
