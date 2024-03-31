import { Species, Ability } from "../abilities/types";
import species from "../abilities/data/species";
import abilities from "../abilities/data/abilities";

export function getSimilarItem(keyword: string, name: string): Species | undefined {
  const query = (item: Species | Ability) => RegExp(keyword.trim(), "i").test(item.name);
  return name == "species" ? species.find(query) : abilities.find(query);
}
