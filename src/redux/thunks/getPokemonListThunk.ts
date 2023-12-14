import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../api/constants";
import {} from "../reducers/actions";
import { actionSetPokemonsList } from "../reducers/pokemonList/pokemonListActions";

export const getPokemonList = (): any => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}`;

  return function (dispatch: (arg0: { type: string; payload: any }) => void) {
    fetch(url)
      .then((data) => data.json())
      .then((response) =>
        Promise.all(
          response.results.map((item: any) =>
            fetch(item.url).then((data) => data.json())
          )
        ).then((response) => dispatch(actionSetPokemonsList(response)))
      );
  };
};
