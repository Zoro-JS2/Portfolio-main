import React from "react";
import "../style/PortfolioStyle.css";
import Cards from "../Cards";
import Form from "./PagesComponents/Form";
//image
import profileimg from "../Images/iconProfile.jpg";
import instagram from "../Images/inst.png";
import gmail from "../Images/gmail.png";
import github from "../Images/github.png";
import img from "../Images/body-text.svg";
import AEicons from "../Images/AE.png";
const Portfolio = () => {
  return (
    <>
      <div className='header'>
        <img
          src={profileimg}
          id='profileImage'
          width='100'
          height='100'
          alt='Profile Image'
        />
        <h1>
          <b>Name:</b> Dmytro <b>Surname: </b>Gedziuk
        </h1>
      </div>
      <div className='NavPath'>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Portfolio
            </li>
          </ol>
        </nav>
      </div>
      <div className='Social_container'>
        <Cards
          image={github}
          title='GitHub'
          text='My projects. Here you can see all my projects.'
          link='https://github.com/Zoro-JS2/'
        />
        <Cards
          image={instagram}
          title='Instagram'
          text="It's my Instagram account. Following me and see my profile."
          link='https://www.instagram.com/dimagedzuk/'
        />
        <Cards
          image={gmail}
          title='Gmail'
          text='Contact with me. If you like my web-page. Plz send me an email message. I very hope to you answer.'
          link='https://mail.google.com/mail/u/0/'
        />
      </div>
      <div className='about'>
        <p>
          <b>ABOUT ME:</b>
          <a name='bio'></a>
          <br /> Hello my reader again. My name is Dmitro. I am 21 years old and
          I live in Kharkov. I am a student and learn from Kharkov National
          University of Radioelectronics (NURE) at 126 specialties (126 -
          information systems and technologies). I worked in a very interesting
          company, GemMind(
          <a href='https://gemmind.net/'>https://gemmind.net/</a>). Thanks to
          this company, I learned a lot and got a lot of experience in what I
          did not know, you can see it further in my resume.
          <hr />
        </p>
      </div>
      <div className='containerProjects'>
        <h1>Projects:</h1>
        <div className='projects'>
          <a name='project'></a>
          <Cards
            image={img}
            title='Web-page'
            text='I created web page with React js.'
            link='/'
          />
          <Cards
            image={AEicons}
            title='After Effect Script'
            text='I made script to auto creating comp'
            link='/'
          />
          <Cards
            image={AEicons}
            title='Mini Projects'
            text='I made mini tasks for React js'
            link='/projects'
          />
        </div>
      </div>

      <div className='footer'>
        <hr />
        <Form />
      </div>
    </>
  );
};

export default Portfolio;
