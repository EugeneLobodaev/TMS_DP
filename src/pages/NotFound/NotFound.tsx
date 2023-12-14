import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={css.container}>
      <Link to="/Pokemons">
        <button type="button" className={css.text}>
          Not found, click me to go back!
        </button>
      </Link>
    </div>
  );
};
