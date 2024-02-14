import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <a className="" href="https://www.linkedin.com/in/sountea-deyane-tora/">
        <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
      </a>
      <a className=" " href="https://github.com/sountea">
        <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
