import React from "react";
import profileImage from "../Images/iconProfile.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import ComtactINF from "./PagesComponents/Contactcomponent";
//css
import "../style/Home.css";

//img
import work from "../Images/work.png";
import study from "../Images/study.png";
import star from "../Images/4Star.png";
const Home = () => {
  return (
    <>
      <div className='header'></div>
      <div className='ProfileInfo'>
        <div class='d-flex position-relative' id='profcard'>
          <img
            src={profileImage}
            class='flex-shrink-0 me-3'
            alt='Profile image'
          />
          <div className='infoCard'>
            <h5 class='mt-0'>Gedzuke Dmytro</h5>
            <p>
              Hello my reader. My name is Dmitro. I am 21 years old and I live
              in Kharkov. I am a student and learn from Kharkov National
              University of Radioelectronics (NURE) at 126 specialties (126 -
              information systems and technologies)...
            </p>
            <a href='/portfolio/#bio' class='stretched-link'>
              More
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className='NavPath'>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Bio
            </li>
          </ol>
        </nav>
      </div>
      <div className='experience'>
        <div className='Education'>
          <h1>
            <img src={study} alt='educimg' /> Education
          </h1>
          <hr />
          <ListGroup>
            <ListGroup.Item
              action
              href='https://khpcc.com'
              target='_blank'
              id='linkitem'
            >
              <h1 className='LinkEd'>HPKK</h1>
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='https://nure.ua/ru/'
              target='_blank'
              id='linkitem'
            >
              <h1 className='LinkEd'>NURE</h1>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className='Work'>
          <h1>
            <img src={work} alt='workimg' />
            Work Experience
          </h1>
          <hr />
          <ListGroup>
            <ListGroup.Item
              action
              href='https://dental-technika.com.ua'
              target='_blank'
              id='linkitem'
            >
              <h1 className='LinkEd'>Dental Technika</h1>
              <p>
                <b>Job: </b>Photo editor
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='https://gemmind.net/'
              target='_blank'
              id='linkitem'
            >
              <h1 className='LinkEd'>GemmMind</h1>
              <p>
                <b>Job: </b>Javascript Coder
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className='FAQ'>
        <h1>FAQ</h1>
        <div className='question-box'>
          <div className='left-box'>
            <Accordion>
              <Accordion.Item eventKey='0' id='questionBox'>
                <Accordion.Header>
                  <h1>How is your progress in JS?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  I studied JavaScript myself. It became interesting to me in
                  college when we created websites. From that moment on, I began
                  to study this programming language on my own. Today you can
                  see all my work on git-hub, for this go to my portfolio
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1' id='questionBox'>
                <Accordion.Header>
                  <h1>My rate</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <img src={star} alt='star' className='FAQimg' />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='right-box'>
            <Accordion>
              <Accordion.Item eventKey='0' id='questionBox'>
                <Accordion.Header>
                  <h1>How your can work and study?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Due to the fact that my studies are remote, I can combine my
                  studies with work.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1' id='questionBox'>
                <Accordion.Header>
                  <h1>Where your Projects?</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Please check my
                  <a href='/portfolio' className='linkportfol'>
                    Portfolio
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <ComtactINF
        tel='+38(066)40-38-807'
        mail='dema2000g@gmail.com'
        gitlink='Zoro-JS2'
        portfoliolink='Projects'
      />
    </>
  );
};

export default Home;
