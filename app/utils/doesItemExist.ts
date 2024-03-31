import { Species, Ability } from "../abilities/types";
import species from "../abilities/data/species";
import abilities from "../abilities/data/abilities";

export function doesItemExist(keyword: string, name: string): boolean {
  const query = (item: Species | Ability) => RegExp(`^${keyword.trim()}$`, "i").test(item.name);
  return name == "species" ? species.some(query) : abilities.some(query);
}
