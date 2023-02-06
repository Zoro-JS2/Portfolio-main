import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../style/styles.css";

export default function Api() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((respose) => respose.json())
      .then((respose) => {
        setUsers(respose.data);
        console.log(
          fetch("https://jsonplaceholder.typicode.com/photos").then((respose) =>
            respose.json()
          )
        );
        setIsLoading(false);
        // Optional code to simulate delay
        /*  setTimeout(() => {
          setUsers(respose.data);
          setIsLoading(false);
        }, 3000); */
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };
  const renderUser = (
    <div className='userlist-container'>
      {users.forEach((item, index) => (
        <div className='user-container' key={index}>
          <img src={item.avatar} alt='' />
          <div className='userDetail'>
            <div className='first-name'>{`${item.id}`}</div>
            <div className='last-name'>{item.title}</div>
            <div className='email'>{item.url}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className='Api'>
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <h2>First button with real timeout</h2>
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch1 Users
      </button>
    </div>
  );
}
