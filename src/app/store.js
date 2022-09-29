import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/navigation/themeSlice';


export const store = configureStore({
  reducer: {
    theme: themeReducer
  },
});
