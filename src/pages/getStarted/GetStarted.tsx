import { Link } from "react-router-dom";
import css from "./GetStarted.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonList } from "../../redux/thunks/getPokemonListThunk";

export const GetStarted = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  return (
    <div className={css.container}>
      <Link to="/Pokemons">
        <button type="button" className={css.text}>
          Начать
        </button>
      </Link>
    </div>
  );
};
