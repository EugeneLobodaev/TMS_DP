import {
  ACTION_NAME_FETCH_LIST,
  ACTION_NAME_SET_LIST,
  ACTION_NAME_FETCH_LIST_ERROR,
  ACTION_NAME_SET_LIST_REQUEST_RESULT,
} from "./pokemonListActions";
import { IPokemonListReducer, ReduxAction } from "../../../types/itemList";

const initialState: IPokemonListReducer = {
  pokemonsList: [],
  pokemonsListRequestResult: undefined,
  pokemonsListLoading: false,
  pokemonsListError: null,
};

export function pokemonsListReducer(state = initialState, action: ReduxAction) {
  switch (action.type) {
    case ACTION_NAME_FETCH_LIST:
      return {
        ...state,
        pokemonsListLoading: true,
        pokemonsListError: null,
      };
    case ACTION_NAME_SET_LIST:
      return {
        ...state,
        pokemonsListLoading: false,
        pokemonsList: action.payload,
      };
    case ACTION_NAME_FETCH_LIST_ERROR:
      return {
        ...state,
        pokemonsListLoading: false,
        pokemonsListError: action.payload,
      };
    case ACTION_NAME_SET_LIST_REQUEST_RESULT:
      return {
        ...state,
        pokemonsListRequestResult: action.payload,
      };
    default:
      return state;
  }
}
