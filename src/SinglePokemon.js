import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GalleryCard from './GalleryCard.js';

const SinglePokemon = () => {
  let params = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then((respPokemon) => {
        return {
          pokeName: respPokemon.data.name,
          pokeSrc: respPokemon.data.sprites.front_default,
        };
      })
      .then((r) => setSelectedPokemon(r));
  }, []);

  if (selectedPokemon === null) {
    return null;
  } else {
    return (
      <GalleryCard
        galleryName={selectedPokemon.pokeName}
        src={selectedPokemon.pokeSrc}
      ></GalleryCard>
    );
  }
};

export default SinglePokemon;
