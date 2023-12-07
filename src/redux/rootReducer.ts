import { combineReducers } from "redux";
import { bankReducer } from "./reducers/bankRedurcers";
import { pokemonProfileReducer } from "./reducers/pokemonProfile/pokemonProfileReducer";
import { pokemonListReducer } from "./reducers/pokemonList/pokemonListReducer";

export const rootReducer = combineReducers({
  bankReducer,
  pokemonListReducer,
  pokemonProfileReducer,
});
