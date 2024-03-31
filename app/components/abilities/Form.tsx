import { useEffect, useState } from "react";
import { Ability, FormData, IsError, Pokemon, Species } from "@/app/abilities/types";
import { generateId } from "@/app/utils/generateId";
import { doesItemExist } from "@/app/utils/doesItemExist";
import { getSimilarItem } from "@/app/utils/getSimilarItem";
import { capitalize } from "@/app/utils/capitalize";
import Input from "./Input";
import Datalist from "./Datalist";
import SubmitButton from "./SubmitButton";

type Props = {
  data: { species: Species[]; abilities: Ability[] };
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const Form = ({ data, setPokemons }: Props): JSX.Element => {
  const [form, setForm] = useState<FormData>({
    species: "",
    ability1: "Unknown",
    ability2: "Unknown",
    hidden: "Unknown",
  });
  const [disabled, setDisabled] = useState<{ ability2: boolean; hidden: boolean }>({
    ability2: false,
    hidden: false,
  });
  const [isError, setIsError] = useState<IsError>({
    species: false,
    ability1: false,
    ability2: false,
    hidden: false,
  });

  useEffect(() => {
    if (form.hidden == "None") setIsError((prev) => ({ ...prev, hidden: false }));
    if (form.ability2 == "None") setIsError((prev) => ({ ...prev, ability2: false }));
  }, [form]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: capitalize(value) }));
    setIsError((prev) => ({ ...prev, [name]: !doesItemExist(value, name) }));
  }

  function handleFocusOut(e: React.FocusEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    const similarSearch = getSimilarItem(value, name);

    if (!similarSearch) {
      setIsError((prev) => ({ ...prev, [name]: true }));
      return;
    } else {
      setIsError((prev) => ({ ...prev, [name]: false }));
    }

    if (name == "species") {
      setDisabled({ ability2: !similarSearch.hasAbility2, hidden: !similarSearch.hasHidden });
      setForm((prev) => ({
        ...prev,
        ability2: similarSearch.hasAbility2 ? "Unknown" : "None",
        hidden: similarSearch.hasHidden ? "Unknown" : "None",
      }));
    }
    setForm((prev) => ({ ...prev, [name]: similarSearch.name })); // AUTO-COMPLETE INPUT VALUE
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPokemons((prev) => [...prev, { ...form, id: generateId() }]); // ADD NEW POKEMON FROM FORM
    setForm({ species: "Abomasnow", ability1: "Unknown", ability2: "None", hidden: "Unknown" }); // RESET FORM
    setDisabled({ ability2: true, hidden: false }); // ENABLED HIDDEN ABILITY INPUT
    document.querySelector<HTMLInputElement>(`[name="species"]`)?.focus(); // FOCUS ON SPECIES INPUT
  }

  return (
    <form
      className="flex gap-3 justify-center flex-wrap text-center w-full m-auto"
      onSubmit={handleSubmit}>
      <Input
        name="species"
        autoFocus
        value={form.species}
        isInvalid={isError.species}
        handleChange={handleChange}
        handleFocusOut={handleFocusOut}
      />
      <Input
        name="ability1"
        value={form.ability1}
        isInvalid={isError.ability1}
        handleChange={handleChange}
        handleFocusOut={handleFocusOut}
      />
      <Input
        name="ability2"
        value={form.ability2}
        isInvalid={isError.ability2}
        disabled={disabled}
        handleChange={handleChange}
        handleFocusOut={handleFocusOut}
      />
      <Input
        name="hidden"
        value={form.hidden}
        isInvalid={isError.hidden}
        disabled={disabled}
        handleChange={handleChange}
        handleFocusOut={handleFocusOut}
      />
      <SubmitButton
        disabled={isError.species || isError.ability1 || isError.ability2 || isError.hidden}
      />
      <Datalist id="species" data={data.species} />
      <Datalist id="abilities" data={data.abilities} />
    </form>
  );
};

export default Form;
