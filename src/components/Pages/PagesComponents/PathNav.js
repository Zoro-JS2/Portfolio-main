import React from "react";
import "../../style/pathNavStyle.css";
function PathNav(props) {
  return (
    <nav aria-label='breadcrumb'>
      <ol class='breadcrumb'>
        <li class='breadcrumb-item'>
          <a href='/'>Home</a>
        </li>
        <li class='breadcrumb-item active' aria-current='page'>
          {props.pathtitle}
        </li>
      </ol>
    </nav>
  );
}

export default PathNav;
