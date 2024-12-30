import { Move } from "../types.ts";

type RawMoveResponse = {
  name: string;
  power: number | null;
};

export const getMoveDetail = async (url: string): Promise<Move> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al obtener el movimiento");

  const data: RawMoveResponse = await response.json();
  return {
    name: data.name,
    power: data.power !== null ? data.power.toString() : null
  };
};

