import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="Skills-section" id="Skills">
      <h1 className="text-center p-10 text-4xl skills_title">Compétences</h1>
      <div className="container">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};

export default Skills;
