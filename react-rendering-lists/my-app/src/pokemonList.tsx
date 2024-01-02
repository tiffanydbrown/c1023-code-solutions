import './App.css';

type PokedexProps = {
  list: { number: string; name: string }[];
};

export function PokemonList({ list }: PokedexProps) {
  const listItems = list.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
