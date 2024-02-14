import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="flex justify-center item-center " id="About">
      <div className="Container w-[1000px] ">
        <h1 className=" text-center p-10 text-4xl about-title ">
          A propos de moi
        </h1>

        <div className="Content flex justify-between items-center ">
          <div className="image rounded-xl  w-96 h-96 border  "></div>
          <div className="presentation w-[500px] h-1/2  text-sm">
            <p className="mb-7 mt-7">
              Bonjour à tous ! Je suis TORA Sountea Deyane, étudiante en 3ème
              année de Bachelor en Conception d'Applications Numériques à l'ECE
              Lyon, et je m'intéresse particulièrement au développement web.
              <br /> En tant que développeuse junior, je jongle avec
              enthousiasme entre le code, le design et toutes les subtilités qui
              rendent le monde numérique aussi passionnant. <br />
              Mon portfolio représente un espace où je partage mes expériences,
              réussites et défis en tant que développeuse junior. Que ce soit
              dans la création de sites web ou d'applications, chaque ligne de
              code reflète une étape de mon parcours.
              <br /> Parallèlement, j'ai également développé des compétences en
              gestion de projet, ce qui me permet d'aborder les défis du
              développement avec une approche globale et organisée.
              <br /> Si vous avez des idées à partager, des projets à discuter
              ou simplement envie de discuter des dernières tendances, je suis
              totalement ouverte.
              <br /> Merci d'être ici et de partager cette aventure avec moi.
              <br />
              Ensemble,explorons les multiples facettes du développement web !
              🚀
            </p>
            <div className="bg-black text-white  p-2 w-36 flex justify-center items-center gap-1 rounded">
              <a
                href="/assets/mon-cv.pdf"
                download="mon-cv.pdf"
                className=" text-sm"
              >
                Download cv
              </a>
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="#FFFF"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="#FFFF"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="#000"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="#000"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
