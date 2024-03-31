"use client";

import abilities from "@/app/abilities/data/abilities";
import species from "@/app/abilities/data/species";
import Form from "../components/abilities/Form";
import Table from "../components/Table";
import { Pokemon } from "./types";
import { useEffect, useState } from "react";

const Abilities = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // ALL POKEMONS

  // GET POKEMONS FROM LOCALSTORAGE IF EXISTS
  useEffect(() => {
    const savedPokemons = localStorage.getItem("pokemons") || "";
    if (savedPokemons.length > 2) setPokemons(JSON.parse(savedPokemons));
  }, []);

  // UPDATE LOCALSTORAGE WHEN POKEMONS UPDATED
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <div>
      <Form data={{ species, abilities }} setPokemons={setPokemons} />
      <Table pokemons={pokemons} setPokemons={setPokemons} />
    </div>
  );
};

export default Abilities;
