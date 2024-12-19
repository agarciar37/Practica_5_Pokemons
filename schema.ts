export const schema = `#graphql
    type Ability {
        name: String!
        effect: String!
    }

    type Move {
        name: String!
        power: Int
    }

    type Pokemon {
        id: Int!
        name: String!
        abilities: [Ability!]!
        moves: [Move!]!
    }

    type Query {
        pokemon(id: Int, name: String): Pokemon
    }
`