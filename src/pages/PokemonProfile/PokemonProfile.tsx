import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PokemonProfileItem } from "../../types/itemList";
import css from "./PokemonProfile.module.css";
import { ButtonHeader } from "../../components/shared/buttons";

export const PokemonProfile = () => {
  const profile: PokemonProfileItem | undefined = useSelector(
    (state: RootState) => state.pokemonProfileReducer.pokemonProfile
  );

  const getStat = (
    path: (string | number)[],
    label: string,
    index?: number
  ) => {
    return (
      <div className={css.stat}>
        <span className={css.statLabel}>{profile?.name}</span>
      </div>
    );
  };

  const getTypes = () => {
    const typesList = profile?.types.map((item) => item.type.name).join(", ");
    return (
      <div className={css.stat}>
        <span className={css.statLabel}>Тип: </span>
        <span>{typesList}</span>
      </div>
    );
  };

  const getMainStats = () => {
    return profile?.stats.map((item, index) => {
      const name = profile?.stats[index].stat.name;
      return getStat(
        ["stats", index, "base_stat"],
        name[0].toUpperCase() + name?.slice(1),
        index
      );
    });
  };
  return (
    <div className={css.root}>
      <div className={css.profile}>
        <div className={css.name}>{profile?.name}</div>
        <div className={css.profileContent}>
          <div className={css.imgWrap}>
            <img
              className={css.img}
              src={`${profile?.sprites.front_default}`}
              alt="#"
            />
          </div>
          <div className={css.stats}>
            <div>Параметры {profile?.name}</div>
            <span>Вес: {profile?.weight}</span>
            <span>Рост: {profile?.height}</span>
            {getTypes()}
            {getMainStats()}
            
          </div>
          <NavLink to={"Pokemons"} className={css.text}>
        <ButtonHeader
          name={"Назад"}
          className={css.button}
          onClick={undefined}
        />
      </NavLink>
        </div>
      </div>

    </div>
  );
};
