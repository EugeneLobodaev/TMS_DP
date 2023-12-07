import { actionCreator } from "../../helpers/actionCreator";
import { PokemonProfileItem, ReduxAction } from "../../../types/itemList";

const ACTION_NAME_FETCH_PROFILE = "FETCH_PROFILE";
const ACTION_NAME_SET_PROFILE = "SET_PROFILE";
const ACTION_NAME_FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR";

interface fetchProfilePayload {
  id: number | string;
}

export interface fetchProfileAction extends ReduxAction {
  payload: fetchProfilePayload;
}

const actionFetchPokemonProfile = (params: fetchProfilePayload) =>
  actionCreator(ACTION_NAME_FETCH_PROFILE, params);
const actionSetPokemonsProfile = (params: PokemonProfileItem) =>
  actionCreator(ACTION_NAME_SET_PROFILE, params);
const actionFetchPokemonsProfileError = (params: any) =>
  actionCreator(ACTION_NAME_FETCH_PROFILE_ERROR, params);

export {
  ACTION_NAME_FETCH_PROFILE,
  ACTION_NAME_SET_PROFILE,
  ACTION_NAME_FETCH_PROFILE_ERROR,
  actionFetchPokemonProfile,
  actionSetPokemonsProfile,
  actionFetchPokemonsProfileError,
};
