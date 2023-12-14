import { Link, NavLink } from "react-router-dom";
import css from "./GetStarted.module.css";
export const GetStarted = () => {
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
