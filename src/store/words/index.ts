import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface WordsState {
  values: string[];
}

const initialState: WordsState = {
  values: [],
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.values = state.values.concat(action.payload);
    },
    removeLast: (state) => {
      state.values.pop();
    },
    removeAll: (state) => {
      state.values = [];
    },
  },
});

export const { add, removeLast, removeAll } = wordsSlice.actions;
export const selectWords = (state: RootState) => state.words.values;
export default wordsSlice.reducer;
