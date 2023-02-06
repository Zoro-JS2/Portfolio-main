import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import "../style/StyleforFetch.css";
function FetchTest() {
  const [posts, setPosts] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res);
      setPosts(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div className='ListOfFetch'>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>
              <div>
                # {post.id} <b>User {post.userId}</b>
              </div>
              {post.title}
              {
                (post.title = post.title
                  .toLowerCase()
                  .replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                  }))
              }
              ;
            </h1>
            <h2></h2>
            <p>{post.body}</p>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTest;
