import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./Game/gameSlice"

export const store = configureStore({
    reducer: {
        game:gameSlice,
    }
})