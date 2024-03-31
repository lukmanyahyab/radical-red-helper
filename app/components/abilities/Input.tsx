import InputErrorMessage from "./InputErrorMessage";

type Props = {
  name: string;
  autoFocus?: boolean;
  value: string;
  disabled?: { ability2: boolean; hidden: boolean };
  isInvalid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocusOut: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  autoFocus,
  value,
  disabled,
  isInvalid,
  handleChange,
  handleFocusOut,
}: Props): JSX.Element => {
  const label =
    name == "ability1"
      ? "Ability 1"
      : name == "ability2"
      ? "Ability 2"
      : name == "hidden"
      ? "Hidden Ability"
      : "Species";
  return (
    <div className="relative">
      <label className="flex flex-col gap-2 text-white font-semibold capitalize">
        {label}
        <input
          type="text"
          name={name}
          list={name == "species" ? "species" : "abilities"}
          autoFocus={autoFocus}
          autoComplete="off"
          onBlur={handleFocusOut}
          onChange={handleChange}
          onFocus={(e) => e.target.select()}
          value={value}
          disabled={name == "ability2" ? disabled?.ability2 : disabled?.hidden}
          className={`bg-zinc-500 rounded-lg px-2 py-1 disabled:bg-zinc-800 disabled:text-red-500 disabled:border-transparent ${
            isInvalid && "is-invalid"
          }`}
        />
      </label>
      {isInvalid && (
        <InputErrorMessage message={`${name == "species" ? "Pokemon" : "Ability"} not found`} />
      )}
    </div>
  );
};

export default Input;
