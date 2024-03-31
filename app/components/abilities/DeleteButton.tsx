import { Pokemon } from "@/app/abilities/types";

type Props = {
  id: string;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const DeleteButton = ({ id, setPokemons }: Props) => {
  return (
    <button
      className="hover:bg-red-300 rounded transition duration-200 text-lg"
      onClick={() =>
        confirm("Are you sure?") &&
        setPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id))
      }>
      ❌
    </button>
  );
};

export default DeleteButton;
