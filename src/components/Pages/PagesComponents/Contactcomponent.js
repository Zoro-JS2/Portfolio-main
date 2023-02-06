import React from "react";

//css
import "../../style/Contact.css";
export default function Contactcomponent(props) {
  return (
    <div className='container_contact'>
      <div className='myself_contact'>
        <h1>Contact with me:</h1>
        <ul>
          <li>TEL:{props.tel}</li>
          <li>
            Gmail:
            <a
              href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRvwTnGbBrqcnFjgfSlvqzhMvZPFXJrPVnkbPsbVllmmkqgmvhqGcdvTfmWFTjdhrfrzMVl'
              target='_blank'
            >
              {props.mail}
            </a>
          </li>
        </ul>
      </div>
      <div className='work_contact'>
        <h1>Contact with me by work:</h1>
        <ul>
          <li>
            GitHub:
            <a href='https://github.com/Zoro-JS2/' target='_blank'>
              {props.gitlink}
            </a>
          </li>
          <li>
            My projects:
            <a href='/portfolio#project'>{props.portfoliolink}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
