import { getPokemon } from "./services/pokeService.ts";
import { getAbilityDetail } from "./services/abilityService.ts";
import { getMoveDetail } from "./services/moveService.ts";
import { Pokemon, Ability, Move } from "./types.ts";

export const resolvers = {
  Query: {
    pokemon: async (
      _: unknown,
      args: { id?: number; name?: string }
    ): Promise<Pokemon | null> => {
      const { id, name } = args;
      return await getPokemon(id, name);
    },
  },
  Pokemon: {
    abilities: async (parent: Pokemon): Promise<Ability[]> => {
      const abilities = parent.abilities;
      // abilities[i].url -> https://pokeapi.co/api/v2/ability/{id}
      return Promise.all(abilities.map(a => getAbilityDetail(a.url)));
    },
    moves: async (parent: Pokemon): Promise<Move[]> => {
      const moves = parent.moves;
      // moves[i].url -> https://pokeapi.co/api/v2/move/{id}
      return Promise.all(moves.map(m => getMoveDetail(m.url)));
    }
  }
};
