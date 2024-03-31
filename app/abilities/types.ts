export type Pokemon = {
  id: string;
  species: string;
  ability1: string;
  ability2: string;
  hidden: string;
};
export type FormData = { species: string; ability1: string; ability2: string; hidden: string };
export type Species = {
  name: string;
  hasAbility2?: boolean;
  hasHidden?: boolean;
  evolutions?: string[];
};
export type Ability = { name: string };
export type IsError = { species: boolean; ability1: boolean; ability2: boolean; hidden: boolean };
export type Datum = { name: string; hasAbility2?: boolean; hasHidden?: boolean };
