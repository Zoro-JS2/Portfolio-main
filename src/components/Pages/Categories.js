import React, { Component } from "react";
import "../style/Sushi.css";
export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "hot",
          name: "Hot",
        },
        {
          key: "new",
          name: "New",
        },
      ],
    };
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map((el) => (
          <div key={el.key} className='list-categories'>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
