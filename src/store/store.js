import { configureStore } from '@reduxjs/toolkit'
import { likesSlice } from './slices/pokemon'
import { pokeApi } from './apis'

export const store = configureStore({
	reducer: {
		pokeLikes: likesSlice.reducer,
		[pokeApi.reducerPath]: pokeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokeApi.middleware)
})
