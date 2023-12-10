import { error } from "console";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../api/constants";
import { IPokemonListReducer } from "../../types/itemList";
import { actionFetchPokemonsListError } from "../reducers/actions";
import {
  actionFetchPokemonList,
  actionSetPokemonsList,
} from "../reducers/pokemonList/pokemonListActions";

export const getPokemonList = async (): Promise<any> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}`;
  const response = await fetch(url).then((data) => data.json());
  console.log(response);
  return async function (
    dispatch: (arg0: { type: string; payload: any }) => void
  ) {
    dispatch(actionSetPokemonsList(response.results));
    try {
      dispatch(actionSetPokemonsList(response));
    } catch (err) {
      console.log(err);
    }
  };
};
