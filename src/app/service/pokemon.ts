export interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiTypes: {
    name: string;
    image: string;
  }[];
  apiGeneration: number;
  apiResistances: {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
  }[];
  resistanceModifyingAbilitiesForApi: any[]; // You can specify a more detailed type if needed
  apiEvolutions: {
    name: string;
    pokedexId: number;
  }[];
  apiPreEvolution: {
    name: string;
    pokedexId: number;
  } | null;
  apiResistancesWithAbilities: any[]; // You can specify a more detailed type if needed
}

