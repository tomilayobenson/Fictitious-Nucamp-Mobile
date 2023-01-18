import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (favorites, action) => {
            if(favorites.includes(action.payload)) {
                return (favorites.filter((favorite) => favorite !==action.payload))
            } else {
                favorites.push(action.payload)
            }
        }
    }
}

)

export const favoritesReducer = favoritesSlice.reducer;
export const {toggleFavorite} = favoritesSlice.actions;
