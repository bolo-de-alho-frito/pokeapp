import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
  },
  reducers: {
    setPokemons(state, { payload }) {
      return { ...state, pokemon: payload };
    },
  },
});

export const { setPokemon } = slice.actions;

export default slice.reducer;
