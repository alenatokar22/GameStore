import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer";
import GamesReducer from "./GamesSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, game: GamesReducer },
});
