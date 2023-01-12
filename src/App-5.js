import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome, To my new blog";
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked : {likes} times.</p>
        <p>{10}</p>
        <p>{"Hello, Nijas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <p>{}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
