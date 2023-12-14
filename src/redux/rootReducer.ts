import { combineReducers } from "redux";
import { pokemonProfileReducer } from "./reducers/pokemonProfile/pokemonProfileReducer";
import { pokemonsListReducer } from "./reducers/pokemonList/pokemonListReducer";

export const rootReducer = combineReducers({
  pokemonsListReducer,
  pokemonProfileReducer,
});
