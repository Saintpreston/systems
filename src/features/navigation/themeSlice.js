import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  mode: 'dark', /* later come back and use an async thunk that waits until I know what theme the user prefers THEN intilaizes */
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mode = action.payload ;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, initTheme } = themeSlice.actions;

export default themeSlice.reducer;