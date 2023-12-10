import { combineReducers } from "redux";
import { bankReducer } from "./reducers/bankRedurcers";
import { pokemonProfileReducer } from "./reducers/pokemonProfile/pokemonProfileReducer";
import { pokemonsListReducer } from "./reducers/pokemonList/pokemonListReducer";

export const rootReducer = combineReducers({
  bankReducer,
  pokemonsListReducer,
  pokemonProfileReducer,
});
