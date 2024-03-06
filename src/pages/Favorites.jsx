import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Card } from '../components/pokeCard/PokeCard'

export function Favorites() {
	const pokemons = useSelector((state) => state.pokeLikes.likes)
	if (!pokemons) return <h1>Loading...</h1>
	useEffect(() => {
		window.scrollTo(0, 550)
	}, [])

	return (
		<main className="rounded-tl-3xl rounded-tr-3xl bg-[#000021]">
			<section className="relative z-10 grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] gap-5 space-y-24 p-10 ">
				{pokemons?.map((pokemon) => (
					<Card key={pokemon.id} {...pokemon} />
				))}
				<h1>Hello</h1>
			</section>
		</main>
	)
}
