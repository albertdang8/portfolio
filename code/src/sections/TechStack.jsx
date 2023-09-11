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

const TechStack = () => {
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={git} className="tech__logo git" alt="Git logo" />
        </a>
        <a href="#" target="_blank">
          <img src={gitbash} className="tech__logo gitbash" alt="Bash logo" />
        </a>
        <a href="#" target="_blank">
          <img src={html} className="tech__logo html" alt="HTML logo" />
        </a>
        <a href="#" target="_blank">
          <img src={css} className="tech__logo css" alt="CSS logo" />
        </a>
        <a href="#" target="_blank">
          <img src={tailwind} className="tech__logo tailwind" alt="TailWind logo" />
        </a>
        <a href="#" target="_blank">
          <img src={js} className="tech__logo js" alt="JavaScript logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="tech__logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={viteLogo} className="tech__logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={firebase} className="tech__logo firebase" alt="Firebase logo" />
        </a>
        <a href="#" target="_blank">
          <img src={linkedIn} className="tech__logo linkedIn" alt="LinkedIn logo" />
        </a>
        <a href="#" target="_blank">
          <img src={ts} className="tech__logo ts" alt="TypeScript logo" />
        </a>
      </div>
    </>
  );
};

export default TechStack;
