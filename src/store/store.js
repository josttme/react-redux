import { configureStore } from '@reduxjs/toolkit'
import { pokeSlice, likesSlice } from './slices/pokemon'
import { pokeApi } from './apis'

export const store = configureStore({
	reducer: {
		pokemons: pokeSlice.reducer,
		pokeLikes: likesSlice.reducer,
		[pokeApi.reducerPath]: pokeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokeApi.middleware)
})
