import axios from "axios"
import { API_PREFIX, DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../api/constants"
import { pokemonListReducer } from "../reducers/pokemonList/pokemonListReducer"
import { json } from "stream/consumers"
import { fetchPokemonsList } from "../../api/pokemonList"

export const getPokemonList = ():any => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}`
    fetch(url).then(response => response.json()).then(json => console.log(json))
    return function(dispatch:any) {
    fetch(url).then(response => response.json()).then(json => dispatch(fetchPokemonsList(json)))
    }
}