import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeApi = createApi({
	reducerPath: 'pokeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),

	endpoints: (builder) => ({
		getTodos: builder.query({
			query: (page) => `/pokemon?limit=15&offset=${page * 15}`
		}),
		getPokemons: builder.query({
			query: (id) => `/pokemon/${id}`,
			transformResponse: (response) => {
				return {
					id: response.id,
					name: response.name,
					weight: response.weight,
					height: response.height,
					types: response.types,
					image: response.sprites.other['official-artwork'].front_default
				}
			}
		})
	})
})

export const { useGetTodosQuery, useGetPokemonsQuery } = pokeApi
