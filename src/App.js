import React, { useEffect, useState } from 'react';
import Header from './Personajes/Header'
import Contenido from './Personajes/Contenido'
import Footer from './Personajes/Footer'

function App() {

  const [caracteres, setcatacteres] = useState([]);
  const [info, setpagina] = useState({});

  const primeurl = 'https://rickandmortyapi.com/api/character/';

  const Personajes = (primeurl) => {
    fetch(primeurl)
      .then(response => response.json())
      .then(data => {
        setcatacteres(data.results);
        setpagina(data.info);
      })
      .catch(error => console.log(error))
  };

  const onNext = () => {
    Personajes(info.next);
  }

  const onPrev = () => {
    Personajes(info.prev);
  }

  useEffect(() => {
    Personajes(primeurl);

  }, []);

  return (
    <>
      <Header title="Rick and Morty"/>
      <br></br>
      <Contenido 
        caracteres={caracteres} 
        info={info} 
        onPrev={onPrev} 
        onNext={onNext}/>
      <Footer />
    </>
  );
}

export default App;
