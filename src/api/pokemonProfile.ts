import axios from "axios";
import { API_PREFIX } from "./constants";

export const fetchPokemonProfile = async (id: string | number) => {
  let url = `${API_PREFIX}/pokemon/${id}`;
  const { data } = await axios.get(url);
  return data;
};
