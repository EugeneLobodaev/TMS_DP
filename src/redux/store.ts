import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { IPokemonListReducer } from "./reducers/pokemonList/pokemonListReducer";
import { PokemonProfileReducer } from "./reducers/pokemonProfile/pokemonProfileReducer";

export interface RootState {
  pokemonsListReducer: IPokemonListReducer;
  pokemonProfileReducer: PokemonProfileReducer;
}
export const store = createStore(rootReducer, applyMiddleware(thunk));
