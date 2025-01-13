import { PokemonGrid } from "@/pokemon";

export const metadata = {
  title: "Favoritos",
  description: "Pokémons list",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col p-2">
      <span className="text-5xl font-bold my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
