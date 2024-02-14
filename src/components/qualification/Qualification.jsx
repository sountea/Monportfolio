import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./qualification.css";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Qualification = () => {
  const [toogleState, setToogleState] = useState(1);
  const handleOnclickTab = (index) => {
    setToogleState(index);
  };
  return (
    <section
      className="qualication flex  justify-center items-center"
      id="Qualifications"
    >
      <div className="">
        {" "}
        <h2 className="section__title text-center p-10 text-4xl ">
          {" "}
          Qualifications
        </h2>
        <div className="qualification__container ">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex"
              onClick={() => handleOnclickTab(1)}
            >
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="qualification__icon "
              />{" "}
              Education
            </div>
            <div
              className="qualification__button button--flex"
              onClick={() => handleOnclickTab(2)}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className="qualification__icon"
              />
              Expérience
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={`qualification__content ${
                toogleState === 1 ? "qualification__active" : ""
              }`}
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Stage Développement web
                  </h3>
                  <span className="qualification__subtitle">ECE-Lyon</span>
                  <div className="qualificatio__calender">
                    <FontAwesomeIcon icon={faCalendarDays} /> Juillet
                    2023-Septembre 2023
                  </div>
                </div>
                <div className="">
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div className="">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Chargée d'assistance</h3>
                  <span className="qualification__subtitle">Arc Europe</span>
                  <div className="qualificatio__calender">
                    <FontAwesomeIcon icon={faCalendarDays} />Juin 2022- Août 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`qualification__content ${
                toogleState === 2 ? `qualification__active` : ``
              }`}
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    ECE Bachelor Numérique
                  </h3>
                  <span className="qualification__subtitle">
                    ECE- Paris-Lyon
                  </span>
                  <div className="qualificatio__calender">
                    <FontAwesomeIcon icon={faCalendarDays} /> 2022- 2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Baccalauréat S</h3>
                  <span className="qualification__subtitle">
                    Rossignol Lomé Togo
                  </span>
                  <div className="qualificatio__calender">
                    <FontAwesomeIcon icon={faCalendarDays} /> 2021-2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
