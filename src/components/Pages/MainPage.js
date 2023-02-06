import React from "react";
import NavBar from "./PagesComponents/NavBar";
import PathNav from "./PagesComponents/PathNav";
//css
import "../style/MainPagestyle.css";

//Component
import Fragment from "./PagesComponents/Fragment";
//img
import Image1 from "../Images/iconProfile.jpg";
function MainPage() {
  return (
    <div className='Home'>
      <NavBar active={false} activeLog={true} />
      <div className='title-inf'>
        <h2>Dmitro</h2>
        <a>Projects</a>
        <a>Info</a>
      </div>
      <h2 className='title'>Welcome to my blog</h2>
      <PathNav pathtitle=' ' />
      <div className='Content'>
        <Fragment name='Gedzuk Dmytro' date='05.05.2022' image={Image1} />
        <Fragment name='Gedzuk Dmytro' date='05.05.2022' image={Image1} />
        <Fragment name='Gedzuk Dmytro' date='05.05.2022' image={Image1} />
      </div>
    </div>
  );
}

export default MainPage;
