import { useEffect, useState } from "react";
import { Pokemon } from "../abilities/types";
import { getPokemonByName } from "../utils/getPokemonByName";
import abilities from "../abilities/data/abilities";
import Select from "./abilities/Select";
import DeleteButton from "./abilities/DeleteButton";
import DeleteAllButton from "./abilities/DeleteAllButton";
import EditLabel from "./abilities/EditLabel";
import { highlightText } from "../utils/highlightText";
import Search from "./Search";

type Props = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const Table = ({ pokemons, setPokemons }: Props): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const abilityNames = abilities.map((ability) => ability.name);

  useEffect(() => {
    function deactivateEditMode(e: MouseEvent) {
      const clickedElement = e.target as HTMLElement;
      const table = document.querySelector("table");
      const caption = document.querySelector("caption");
      if (!table?.contains(clickedElement) || caption?.contains(clickedElement)) {
        setEditMode(false);
      } else {
        setEditMode(true);
      }
    }
    document.addEventListener("click", deactivateEditMode);
    return () => {
      document.removeEventListener("click", deactivateEditMode);
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value, selectedOptions } = e.target;
    setPokemons((prev) =>
      prev.map((pokemon) =>
        pokemon.id == value ? { ...pokemon, [name]: selectedOptions[0].textContent } : pokemon
      )
    );
  }

  return pokemons.length ? (
    <table className="m-auto mt-8 rounded-b-lg overflow-hidden">
      <caption className="space-x-[1%]">
        <Search setSearch={setSearch} search={search} />
        <EditLabel editMode={editMode} />
        <DeleteAllButton setPokemons={setPokemons} />
      </caption>
      <thead className="text-sm text-left">
        <tr className="uppercase bg-zinc-800">
          <th className="px-4 py-1 rounded-tl-lg">#</th>
          <th className="px-4 py-1 min-w-60">Species</th>
          <th className="px-4 py-1 min-w-60">Ability 1</th>
          <th className="px-4 py-1 min-w-60">Ability 2</th>
          <th className="px-4 py-1 min-w-60">Hidden Ability</th>
          <th className="pr-3 rounded-tr-lg"></th>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter((pokemon) =>
            RegExp(search, "i").test(
              `${pokemon.species} ${pokemon.ability1} ${pokemon.ability2} ${pokemon.hidden}`
            )
          )
          .map((pokemon, index) => {
            const species = getPokemonByName(pokemon.species);

            return (
              <tr
                className="bg-zinc-200 text-zinc-950 hover:bg-zinc-50 transition duration-100"
                key={pokemon.id}>
                {/* Index Column */}
                <th className="py-1 border-b border-zinc-800">{index + 1}</th>

                {/* Species Column */}
                <td className="px-4 py-1 font-semibold border-b border-zinc-800">
                  {editMode ? (
                    <Select
                      name="species"
                      pokemon={pokemon}
                      items={species?.evolutions}
                      handleChange={handleChange}
                    />
                  ) : (
                    <span>{search ? highlightText(pokemon.species, search) : pokemon.species}</span>
                  )}
                </td>

                {/* Ability 1 Column */}
                <td className="px-4 py-1 font-medium border-b border-zinc-800">
                  {editMode ? (
                    <Select
                      name="ability1"
                      pokemon={pokemon}
                      items={abilityNames}
                      handleChange={handleChange}
                    />
                  ) : (
                    <span className={pokemon.ability1 == "Unknown" ? "text-red-500" : ""}>
                      {search ? highlightText(pokemon.ability1, search) : pokemon.ability1}
                    </span>
                  )}
                </td>

                {/* Ability 2 Column */}
                <td className="px-4 py-1 font-medium border-b border-zinc-800">
                  {!species?.hasAbility2 ? (
                    <span className="text-red-500">None</span>
                  ) : editMode ? (
                    <Select
                      name="ability2"
                      pokemon={pokemon}
                      items={abilityNames}
                      handleChange={handleChange}
                    />
                  ) : (
                    <span className={pokemon.ability2 == "Unknown" ? "text-red-500" : ""}>
                      {search ? highlightText(pokemon.ability2, search) : pokemon.ability2}
                    </span>
                  )}
                </td>

                {/* Hidden Ability Column */}
                <td className="px-4 py-1 font-medium border-b border-zinc-800">
                  {!species?.hasHidden ? (
                    <span className="text-red-500">None</span>
                  ) : editMode ? (
                    <Select
                      name="hidden"
                      pokemon={pokemon}
                      items={abilityNames}
                      handleChange={handleChange}
                    />
                  ) : (
                    <span className={pokemon.hidden == "Unknown" ? "text-red-500" : ""}>
                      {search ? highlightText(pokemon.hidden, search) : pokemon.hidden}
                    </span>
                  )}
                </td>

                {/* Delete Button */}
                <td className="pr-3 border-b border-zinc-800">
                  <DeleteButton id={pokemon.id} setPokemons={setPokemons} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  ) : (
    <div className="text-center bg-red-500 mt-8 w-1/2 mx-auto py-2 rounded">
      <h1>Pokemon not found</h1>
    </div>
  );
};

export default Table;
