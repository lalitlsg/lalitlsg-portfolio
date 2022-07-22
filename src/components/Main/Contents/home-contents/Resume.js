import React from "react";
import resume from "../../../../images/resume.png";
import style from "../../../../styles/home-styles/resume.module.css";

const Resume = () => {
  return (
    <div className={style.resumeMain}>
      <img src={resume} alt="lalit's resume" className={style.resume} />
      <div className={style.preview}></div>
      <a
        href="https://drive.google.com/file/d/1rfyHEMBzgsqMRPNgW2MTLtbtE7b_YWAL/view"
        rel="noreferrer"
        target="_blank"
        className={style.viewFull}
      >
        View Full Resume
      </a>
    </div>
  );
};

export default Resume;
