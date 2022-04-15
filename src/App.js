import React, { useEffect, useState } from 'react';
import Header from './Personajes/Header'
import Contenido from './Personajes/Contenido'
import Footer from './Personajes/Footer'

function App() {

  const [caracteres, setcatacteres] = useState([]);
  const [info, setinfo] = useState();

  const primeurl = 'https://rickandmortyapi.com/api/character/';

  const Personajes = () => {
    fetch(primeurl)
      .then(response => response.json())
      .then(data => setcatacteres(data.results))
      .then(datainfo => setinfo(datainfo.info))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    Personajes(primeurl);

  }, []);

  return (
    <>
      <Header title="Rick and Morty"/>
      <br></br>
      <Contenido caracteres={caracteres} informacion={info}/>
      <Footer />
    </>
  );
}

export default App;
