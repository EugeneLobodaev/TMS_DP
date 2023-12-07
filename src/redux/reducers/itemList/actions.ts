import { actionCreator } from "../../helpers/actionCreator";
import { PokemonListResult, ReduxAction } from "../../../types/itemList";

export const ACTION_NAME_FETCH_LIST = "FETCH_LIST";
export const ACTION_NAME_SET_LIST = "SET_LIST";
export const ACTION_NAME_FETCH_LIST_ERROR = "FETCH_LIST_ERROR";
export const ACTION_NAME_SET_LIST_REQUEST_RESULT = "SET_LIST_REQUEST_RESULT";

interface fetchListPayload {
  url: string | null;
}

export interface fetchPokemonsListAction extends ReduxAction {
  payload: fetchListPayload;
}

export const actionFetchPokemonList = (params?: fetchListPayload) =>
  actionCreator(ACTION_NAME_FETCH_LIST, params);
export const actionSetPokemonsList = (params: PokemonListResult) =>
  actionCreator(ACTION_NAME_SET_LIST, params);
export const actionFetchPokemonsListError = (params: any) =>
  actionCreator(ACTION_NAME_FETCH_LIST_ERROR, params);
export const actionSetPokemonsListRequestResult = (params: PokemonListResult) =>
  actionCreator(ACTION_NAME_SET_LIST_REQUEST_RESULT, params);
