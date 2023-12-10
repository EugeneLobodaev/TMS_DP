import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../api/constants";
import { actionSetPokemonsList } from "../reducers/pokemonList/pokemonListActions";

export const getPokemonList = (): any => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}`;
  return function (dispatch: any) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(actionSetPokemonsList(json)));
  };
};
