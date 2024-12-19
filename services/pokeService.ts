import { Pokemon, PokemonAbility, PokemonMove } from "../types.ts"

type RawPokemonResponse = {
    id: number;
    name: string;
    abilities: { ability: { name: string, url: string }}[];
    moves: { move: { name: string, url: string }}[];
}

export const getPokemon = async (id?: number, name?: string): Promise<Pokemon | null> => {
    if (!id && !name) {
        throw new Error("Se requiere un id o un nombre para buscar un pokemon");
    }

    const queryParam = id ? id.toString() : name!.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${queryParam}`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data: RawPokemonResponse = await response.json();

    const abilities: PokemonAbility[] = data.abilities.map(a => ({
        name: a.ability.name,
        url: a.ability.url
    }))

    const moves: PokemonMove[] = data.moves.map(m => ({
        name: m.move.name,
        url: m.move.url
    }))

    return {
        id: data.id,
        name: data.name,
        abilities,
        moves
    }
}