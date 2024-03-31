type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className="w-[53%] inline-block space-x-[1%]">
      <input
        type="text"
        className="w-3/4 bg-zinc-500 rounded-lg px-2 py-1 placeholder:text-zinc-200"
        onChange={(e) => setSearch(e.target.value.replace(/[^a-z ]/g, ""))}
        onFocus={(e) => e.target.select()}
        placeholder="Search for Pokemon or Ability..."
        value={search}
      />
      <button
        className="w-[24%] py-1 rounded-lg bg-red-500 transition disabled:opacity-60 disabled:pointer-events-none hover:bg-red-600"
        disabled={!search}
        onClick={() => setSearch("")}>
        Clear Search
      </button>
    </div>
  );
};

export default Search;
