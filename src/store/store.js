import { configureStore } from '@reduxjs/toolkit'
import { pokeSlice } from './slices/pokemon'
import { pokeApi } from './apis'

export const store = configureStore({
	reducer: {
		pokemons: pokeSlice.reducer,
		[pokeApi.reducerPath]: pokeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokeApi.middleware)
})
