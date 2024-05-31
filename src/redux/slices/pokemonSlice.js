import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons(state, { payload }) {
      return { ...state, pokemons: payload };
    },
  },
});
