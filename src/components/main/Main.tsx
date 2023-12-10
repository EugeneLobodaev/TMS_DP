import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Main.module.css";
import { actionFetchPokemonList } from "../../redux/reducers/pokemonList/pokemonListActions";
import { RootState } from "../../redux/store";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { getPokemonList } from "../../redux/thunks/getPokemonListThunk";
import { rootReducer } from "../../redux/rootReducer";
import { PokemonProfileItem } from "../../types/itemList";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const bankState = useSelector((state: any) => state.bankReducer);
  // // debugger;
  const pokemonsList = useSelector(
    (state: any) => state.pokemonsListReducer.pokemonsList
  );
  const pokemonsListIsLoading = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListLoading
  );
  const pokemonsListError = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListError
  );
  useEffect(() => {
    getPokemonList();
  });
  console.log(pokemonsList)
  console.log()
  if (!pokemonsList.length && pokemonsListIsLoading) {
    return <div>Список загружается</div>;
  }

  if (pokemonsListError) {
    return <div>ошибка загрузки списка</div>;
  }
  return (
    <div className={css.list}>
      <h1>Список Покемонов</h1>
      <div className={css.list}>
        {pokemonsList.map((item: PokemonProfileItem) => (
          <PokemonCard
            data={item}
            key={item.id}
            name={""}
            sprites={undefined}
          />
        ))}
      </div>
    </div>
  );
};
