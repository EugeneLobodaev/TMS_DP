import { PokemonProfileItem } from "../../types/itemList";
import {} from "../reducers/actions";
import { actionSetPokemonsProfile } from "../reducers/pokemonProfile/pokemonProfileActions";

export const getPokemonProfile = (id: any): any => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  return function (dispatch: (arg0: { type: string; payload: any }) => void) {
    fetch(url)
      .then((data) => data.json())
      .then((response) => dispatch(actionSetPokemonsProfile(response)));
  };
};
