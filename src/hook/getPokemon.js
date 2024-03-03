import { useGetPokemonsQuery } from '../store/apis'

export function getPokemon(pokemon) {
	const id = pokemon.url.split('/')[6]

	const { data: poke } = useGetPokemonsQuery(id)
	if (poke === undefined) return
	return poke
}
