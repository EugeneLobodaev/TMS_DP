import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { PokemonListReducer } from "./reducers/pokemonList/pokemonListReducer";
import { PokemonProfileReducer } from "./reducers/pokemonProfile/pokemonProfileReducer";

export interface RootState {
  pokemonsListReducer: PokemonListReducer;
  pokemonProfileReducer: PokemonProfileReducer;
}

export const store = createStore(rootReducer, applyMiddleware(thunk));
