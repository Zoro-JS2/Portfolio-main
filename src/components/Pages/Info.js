import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../style/styles.css";

export default function Info() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((respose) => respose.json())
      .then((respose) => {
        setUsers(respose.data);
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
  const handleFetch2 = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2")
      .then((respose) => respose.json())
      .then((respose) => {
        setUsers(respose.data);
        setIsLoading(true);
        // Optional code to simulate delay
        setTimeout(() => {
          setUsers(respose.data);
          setIsLoading(false);
        }, 2000);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };
  const renderUser = (
    <div className='userlist-container'>
      {users.map((item, index) => (
        <div className='user-container' key={index}>
          <img src={item.avatar} alt='' />
          <div className='userDetail'>
            <div className='first-name'>{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className='last-name'>{item.last_name}</div>
            <div className='email'>{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className='Info'>
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <h2>First button with real timeout</h2>
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch1 Users
      </button>
      <h2>Second button with timeout 2s</h2>
      <button onClick={handleFetch2} disabled={isLoading}>
        Fetch2 Users
      </button>
    </div>
  );
}
