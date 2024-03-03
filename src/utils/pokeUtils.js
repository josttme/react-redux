export function PokeBgGradient(pokemonTypes, pokeTypes) {
	let background = ''

	if (pokemonTypes.length > 1) {
		background = `linear-gradient(0deg, ${pokemonTypes
			.map((type) => pokeTypes[type].color + 50)
			.join(', ')})`
	} else background = pokeTypes[pokemonTypes[0]].color + 50

	return {
		background,
		color: pokeTypes[pokemonTypes[0]].color
	}
}
