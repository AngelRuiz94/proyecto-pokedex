import { PokeAbility } from "./pokeAbility";
import { PokeStat } from "./pokeStat";

export interface Pokemon {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;
    sprites?: {
      front_default?: string;
    };
    types: {
      slot?: number;
      type?: {
        name?: string;
        url?: string;
      };
    }[];
    abilities: {
      ability?: PokeAbility;
      is_hidden?: boolean;
    }[];
    stats: {
      base_stat?: number;
      stat?: PokeStat;
    }[];
    moves: {
      name: string;
    }
  }