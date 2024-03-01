import PropTypes from 'prop-types'
import { PokeType } from './PokeType'
const colourss = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD'
}
const colours = {
	bug: '#94BC4A',
	ice: '#70CBD4',
	dark: '#736C75',
	fire: '#EA7A3C',
	rock: '#B2A061',
	water: '#539AE2',
	fairy: '#E397D1',
	ghost: '#846AB6',
	grass: '#71C558',
	steel: '#89A1B0',
	dragon: '#6A7BAF',
	flying: '#A98FF3',
	ground: '#CC9F4F',
	normal: '#AAB09F',
	poison: '#B468B7',
	psychic: '#E5709B',
	fighting: '#CB5F48',
	electric: '#E5C531'
}
const styles = (pokemonTypes, percentage) => {
	let background = ''

	if (pokemonTypes.length > 1) {
		background = `linear-gradient(0deg, ${pokemonTypes
			.map((type) => colours[type] + percentage)
			.join(', ')})`
	} else background = colours[pokemonTypes[0]] + percentage

	return {
		background,
		color: colours[pokemonTypes[0]]
	}
}

export function PokeCard({ name, image, types, height, weight }) {
	// Altura en metros
	const heightInMeters = height / 10

	// Peso en kilogramos
	const weightInKg = weight / 10

	const pokemonTypes = types.map((type) => type.type.name)
	return (
		<div
			style={styles(pokemonTypes, 50)}
			className=": group grid min-h-min cursor-pointer gap-4  self-end rounded-3xl border border-transparent pb-5 saturate-[1.2] duration-150  ease-in-out hover:border-current   "
		>
			<img
				src={image}
				className=" -mb-5 -mt-28 w-96 drop-shadow-lg saturate-[1.5] duration-200 ease-in-out group-hover:-translate-y-5 group-hover:scale-110 "
			/>
			<h2 className="text-center text-4xl font-semibold capitalize">{name}</h2>
			<div className="flex justify-center gap-2 ">
				{types.map(({ slot, type }) => (
					<PokeType key={slot} type={type.name} color={colours[type.name]} />
				))}
			</div>
			<div className="flex justify-center gap-5 text-center  ">
				<div className="grid  ">
					<span className="text-3xl ">{heightInMeters}m</span>
					<span className="text-2xl opacity-70">height</span>
				</div>
				<div className="h-3/4 w-[1px] self-center rounded-full bg-current opacity-30 "></div>
				<div className="grid">
					<span className="text-3xl ">{weightInKg}kg</span>
					<span className="text-2xl opacity-70">weight</span>
				</div>
			</div>
		</div>
	)
}

PokeCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	types: PropTypes.array,
	height: PropTypes.number,
	weight: PropTypes.number
}
