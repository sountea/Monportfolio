import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import "../Card.css";

const projects = [
  {
    id: 1,

    image: "/assets/projet1.png",
    title: "Cube Connect",
    langage: "React Js",
    href: "https://cubeconnectwebsite.netlify.app/",
    github: "https://github.com/sountea/CubeConnectWebsite",
  },
  {
    id: 2,

    image: "/assets/photo2.png",
    title: "Le site actuel",
    langage: "React Js",
    href: "https://torasounteadeyane.netlify.app/",
    hrefgithub: "https://github.com/sountea/Monportfolio/tree/master",
  },
];

const Projects = () => {
  return (
    <section className="Skills-section" id="Projects">
      <h1 className="text-center p-10 text-4xl project_title">Projets</h1>
      <div className="project_container">
        {projects.map((elem) => {
          const { id, image, title, langage, href, hrefgithub } = elem;
          return (
            <div className="card pt-5 " key={id}>
              <div
                className="text-white card1 m-auto rounded-xl border border-black"
                style={{
                  backgroundImage: `url(${image})`, // Utilisez l'URL de l'image comme fond
                  backgroundSize: "cover", // Ajustez la taille de l'image pour couvrir complètement la div
                  backgroundPosition: "center", // Centrez l'image
                  backgroundRepeat: "no-repeat", // Ne répétez pas l'image
                }}
              ></div>
              <h1 className="text-lg font-bold text-center">{title}</h1>
              <h2 className="text-xs text-center mb-2">{langage}</h2>

              <div className="footer flex justify-center">
                <a
                  className="text-xs w-30 text-black text-center p-2 mr-5 ml-5 mb-2 border-solid border border-black rounded-xl cursor-pointer hover:bg-black hover:text-white"
                  href={href}
                >
                  Live demo
                </a>
                <a
                  className="text-xs w-30 text-black text-center p-2 px-5 mr-5 ml-5 mb-2 border-solid border border-black rounded-xl cursor-pointer hover:bg-black hover:text-white"
                  href={hrefgithub}
                >
                  Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
