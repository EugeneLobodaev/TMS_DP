import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Main.module.css";
import { RootState } from "../../redux/store";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { getPokemonList } from "../../redux/thunks/getPokemonListThunk";
import { PokemonProfileItem } from "../../types/itemList";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = () => {
  const pokemonsList = useSelector(
    (state: any) => state.pokemonsListReducer.pokemonsList
  );
  const pokemonsListIsLoading = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListLoading
  );
  const pokemonsListError = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListError
  );

  if (!pokemonsList.length && pokemonsListIsLoading) {
    return <h2 className={css.container_text}>Список загружается</h2>;
  }

  if (pokemonsListError) {
    return <div style={{ fontSize: 20 }}>ошибка загрузки списка</div>;
  }
  return (
    <div className={css.container}>
      <h1 className={css.container_text}>Список Покемонов</h1>
      <div className={css.card_list}>
        {pokemonsList.map((item: PokemonProfileItem) => (
          <PokemonCard {...item} />
        ))}
      </div>
    </div>
  );
};
