import reactLogo from "../assets/icons/react.svg";
import viteLogo from "../assets/icons/vite.svg";
import firebase from "../assets/icons/firebase.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import js from "../assets/icons/javaScript.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import git from "../assets/icons/git.svg";
import gitbash from "../assets/icons/bash_logo.png";
import ts from "../assets/icons/typescript.svg";
import html from "../assets/icons/html.svg";
import figma from "../assets/icons/figma.svg"

const TechStack = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
          <img src={git} className="tech__logo git" alt="Git logo" />
          <img src={gitbash} className="tech__logo gitbash" alt="Bash logo" />
          <img src={html} className="tech__logo html" alt="HTML logo" />
          <img src={css} className="tech__logo css" alt="CSS logo" />
          <img src={tailwind} className="tech__logo tailwind" alt="TailWind logo" />
          <img src={js} className="tech__logo js" alt="JavaScript logo" />
          <img src={reactLogo} className="tech__logo react" alt="React logo" />
          <img src={viteLogo} className="tech__logo" alt="Vite logo" />
          <img src={firebase} className="tech__logo firebase" alt="Firebase logo" />
          <img src={linkedIn} className="tech__logo linkedIn" alt="LinkedIn logo" />
          <img src={ts} className="tech__logo ts" alt="TypeScript logo" />
          <img src={figma} className="tech__logo figma" alt="Figma logo" />
      </div>
    </>
  );
};

export default TechStack;
