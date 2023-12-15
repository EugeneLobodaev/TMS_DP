import axios from "axios";
import { API_PREFIX, DEFAULT_LIMIT, DEFAULT_OFFSET } from "./constants";

export const fetchPokemonsList = async (url?: string | null) => {
  let actualUrl = url
    ? url
    : `${API_PREFIX}/pokemon?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}`;
  const { data } = await axios.get(actualUrl);
  return data;
};
