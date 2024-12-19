export type Pokemon = {
    id: number;
    name: string;
    abilities: PokemonAbility[];
    moves: PokemonMove[];
}

export type PokemonAbility = {
    name: string;
    url: string;
}

export type PokemonMove = {
    name: string;
    url: string;
}

export type Ability = {
    name: string;
    effect: string;
}

export type Move = {
    name: string;
    power: string | null;
}