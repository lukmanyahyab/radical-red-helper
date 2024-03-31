import species from "../abilities/data/species";

export function getPokemonByName(name: string) {
  return species.find((spec) => spec.name == name);
}
