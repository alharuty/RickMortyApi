import './App.css';
import React from 'react';
import ImagenRickMorty from './images/rick-morty.png';
import Characters from './components/characters';
import { useState } from 'react';


function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={ImagenRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Search characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;