import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleCard from './artcardstim.js';
import Form from  './formtim.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Form />
          <ArticleCard />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
