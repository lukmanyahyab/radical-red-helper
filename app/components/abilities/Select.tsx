import { Pokemon } from "@/app/abilities/types";

type Props = {
  name: "species" | "ability1" | "ability2" | "hidden";
  pokemon: Pokemon;
  items: string[] | undefined;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ name, pokemon, items, handleChange }: Props) => {
  return (
    <select
      name={name}
      className={`bg-transparent outline outline-1 outline-zinc-950 rounded w-full`}
      onChange={handleChange}>
      {items?.map((item: string, index: number) => (
        <option
          value={pokemon.id}
          selected={item == pokemon[name]}
          key={index}
          className={item == "Unknown" ? "text-red-500" : ""}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
