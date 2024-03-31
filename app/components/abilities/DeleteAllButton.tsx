import { Pokemon } from "@/app/abilities/types";

type Props = {
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const DeleteAllButton = ({ setPokemons }: Props) => {
  return (
    <button
      onClick={() => confirm("Are you sure?") && setPokemons([])}
      className="bg-red-500 px-2 py-1 mb-2 rounded-lg hover:bg-red-600 transition w-[10%]">
      Delete All
    </button>
  );
};

export default DeleteAllButton;
