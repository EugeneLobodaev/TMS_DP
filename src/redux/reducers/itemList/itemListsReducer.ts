import { ItemListReducer } from "../../../types/itemList";
import {
  ACTION_NAME_FETCH_LIST,
  ACTION_NAME_FETCH_LIST_ERROR,
  ACTION_NAME_SET_LIST,
  ACTION_NAME_SET_LIST_REQUEST_RESULT,
} from "./actions";

const defaultState: ItemListReducer = {
  pokemonsList: [],
  pokemonsListRequestResult: undefined,
  pokemonsListLoading: false,
  pokemonsListError: null,
};

export const itemListReducers = (state = defaultState, action: any) => {
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
};
