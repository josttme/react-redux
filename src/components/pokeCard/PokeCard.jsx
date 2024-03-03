import { getPokemon } from '../../hook'
import { PokeBgGradient } from '../../utils'
import { CardSkeleton } from './CardSkeleton'
import { PokeImage } from './PokeImage'
import { PokeTypes } from './pokeTypes'
import { HeightWeight } from './heightWeight'

import {
	SvgBug,
	SvgIce,
	SvgDark,
	SvgFire,
	SvgRock,
	SvgWater,
	SvgFairy,
	SvgGhost,
	SvgGrass,
	SvgSteel,
	SvgDragon,
	SvgFlying,
	SvgGround,
	SvgNormal,
	SvgPoison,
	SvgPsychic,
	SvgFighting,
	SvgElectric
} from '../icons'

const pokeTypesColorIcons = {
	bug: { color: '#94BC4A', icon: <SvgBug /> },
	ice: { color: '#70CBD4', icon: <SvgIce /> },
	dark: { color: '#736C75', icon: <SvgDark /> },
	fire: { color: '#EA7A3C', icon: <SvgFire /> },
	rock: { color: '#B2A061', icon: <SvgRock /> },
	water: { color: '#539AE2', icon: <SvgWater /> },
	fairy: { color: '#E397D1', icon: <SvgFairy /> },
	ghost: { color: '#846AB6', icon: <SvgGhost /> },
	grass: { color: '#71C558', icon: <SvgGrass /> },
	steel: { color: '#89A1B0', icon: <SvgSteel /> },
	dragon: { color: '#6A7BAF', icon: <SvgDragon /> },
	flying: { color: '#A98FF3', icon: <SvgFlying /> },
	ground: { color: '#CC9F4F', icon: <SvgGround /> },
	normal: { color: '#AAB09F', icon: <SvgNormal /> },
	poison: { color: '#B468B7', icon: <SvgPoison /> },
	psychic: { color: '#E5709B', icon: <SvgPsychic /> },
	fighting: { color: '#CB5F48', icon: <SvgFighting /> },
	electric: { color: '#E5C531', icon: <SvgElectric /> }
}

export function PokeCard(pokemon) {
	const pokemonData = getPokemon(pokemon)

	if (!pokemonData) return <CardSkeleton /> // CardSkeleton

	const { name, image, types, height, weight } = pokemonData

	const heightInMeters = height / 10 // Altura en metros

	const weightInKg = weight / 10 // Peso en kilogramos

	const pokemonTypes = types.map((type) => type.type.name)

	return (
		<div
			style={PokeBgGradient(pokemonTypes, pokeTypesColorIcons)}
			className="group grid h-[27rem] cursor-pointer gap-4  self-end rounded-3xl border border-transparent pb-5 saturate-[1.2] duration-200  ease-in-out hover:border-current"
		>
			<PokeImage image={image} />

			<h2 className="text-center text-4xl font-semibold capitalize">{name}</h2>

			<PokeTypes types={types} pokeTypesColorIcons={pokeTypesColorIcons} />

			<HeightWeight height={heightInMeters} weight={weightInKg} />
		</div>
	)
}
