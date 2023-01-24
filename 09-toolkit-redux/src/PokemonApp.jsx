import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, isLoading, pokemons = [] } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Is loading ? {isLoading ? 'true' : 'false'}</span>

      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <h3>{pokemon.name}</h3>
          </li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
