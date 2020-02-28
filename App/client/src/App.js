import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const jokeCard = {
  width:'400px',
  maxHeight:'200px',
  fontSize: '0.7rem',
  background: 'grey',
  margin: '2% auto'
}

function App(props) {

  const [ jokes, setJokes ] = useState([]);

  useEffect (() => {
    axios
      .get('http://localhost:3300/api/jokes', jokes)
      .then(res => {
        console.log(res.data)
        setJokes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [setJokes])

  return (
    <div className="App">
      <header className="App-header">
        {jokes.map( joke => (
          <div style={jokeCard} key={joke.id}>
            <h2>{joke.joke}</h2>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
