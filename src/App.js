import './App.css';
import GalleryCard from './GalleryCard.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`)
      .then((respLista) => {
        Promise.all(
          respLista.data.results.map((pokemon) => {
            return axios.get(pokemon.url).then((respPokemon) => {
              return {
                pokeName: respPokemon.data.name,
                pokeSrc: respPokemon.data.sprites.front_default,
              };
            });
          })
        ).then((r) => setItems(r));
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="gallery">
          {items.map((item, i) => (
            <GalleryCard
              galleryName={item.pokeName}
              src={item.pokeSrc}
            ></GalleryCard>
          ))}
        </div>
      </header>
    </div>
  );
};
export default App;
