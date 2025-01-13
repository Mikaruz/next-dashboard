import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemon";

export const metadata = {
  title: "Pokémons",
  description: "Pokémons list",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col p-2">
      <span className="text-5xl font-bold my-2">
        Listado de Pokémon <small className="text-blue-500">estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
