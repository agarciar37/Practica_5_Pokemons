import { Ability } from "../types.ts";

type RawAbilityResponse = {
  name: string;
  effect_entries: {
    effect: string;
    language: { name: string };
  }[];
};

export const getAbilityDetail = async (url: string): Promise<Ability> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Abilidad no encontrada");

  const data: RawAbilityResponse = await response.json();
  
  const englishEntry = data.effect_entries.find(e => e.language.name === "en");
  const effect = englishEntry ? englishEntry.effect : "No hay descripción disponible";

  return {
    name: data.name,
    effect
  };
};
