import { actionCreator } from "../../helpers/actionCreator";
import { PokemonListResult, ReduxAction } from "../../../types/itemList";

const ACTION_NAME_FETCH_LIST = "FETCH_LIST";
const ACTION_NAME_SET_LIST = "SET_LIST";
const ACTION_NAME_FETCH_LIST_ERROR = "FETCH_LIST_ERROR";
const ACTION_NAME_SET_LIST_REQUEST_RESULT = "SET_LIST_REQUEST_RESULT";

interface fetchListPayload {
  url: string | null;
}

export interface fetchPokemonsListAction extends ReduxAction {
  payload: fetchListPayload;
}

const actionFetchPokemonList = (params?: fetchListPayload) =>
  actionCreator(ACTION_NAME_FETCH_LIST, params);
const actionSetPokemonsList = (params: PokemonListResult) =>
  actionCreator(ACTION_NAME_SET_LIST, params);
const actionFetchPokemonsListError = (params: any) =>
  actionCreator(ACTION_NAME_FETCH_LIST_ERROR, params);
const actionSetPokemonsListRequestResult = (params: PokemonListResult) =>
  actionCreator(ACTION_NAME_SET_LIST_REQUEST_RESULT, params);

export {
  ACTION_NAME_FETCH_LIST,
  ACTION_NAME_SET_LIST,
  ACTION_NAME_FETCH_LIST_ERROR,
  ACTION_NAME_SET_LIST_REQUEST_RESULT,
  actionFetchPokemonList,
  actionSetPokemonsList,
  actionFetchPokemonsListError,
  actionSetPokemonsListRequestResult,
};


// // actions.ts
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from './store';
// import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DataActionTypes } from './types';

// export const fetchDataRequest = (): DataActionTypes => ({
//   type: FETCH_DATA_REQUEST,
// });

// export const fetchDataSuccess = (data: any): DataActionTypes => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchDataFailure = (error: string): DataActionTypes => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });

// export const fetchData = (): ThunkAction<void, RootState, unknown, DataActionTypes> => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());

//     try {
//       const response = await fetch('https://api.example.com/data');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       dispatch(fetchDataSuccess(data));
//     } catch (error) {
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };