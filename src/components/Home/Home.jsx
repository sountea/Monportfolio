import React from "react";
import SocialIcons from "./SocialIcons";
import Data from "./Data";
import "./Home.css";

const Home = () => {
  return (
    <section className="">
      <div className="flex justify-center item-center ">
        <div className="home-content grid gap-7 sm:grid-cols-1">
          <SocialIcons />

          <div className=" bg-red-500 home-image h-96 w-80  shadow-red-500 ">
            {" "}
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
