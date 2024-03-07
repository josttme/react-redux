import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Card } from '../components/pokeCard/PokeCard'

export function Favorites() {
	const pokemons = useSelector((state) => state.pokeLikes.likes)
	if (!pokemons) return <h1>Loading...</h1>
	useEffect(() => {
		window.scrollTo(0, 800)
	}, [])

	return (
		<main className="bg-brand-primary rounded-tl-3xl rounded-tr-3xl">
			<section className="grid-cols-card relative z-10 grid justify-center gap-5 space-y-24 p-10 ">
				{pokemons?.map((pokemon) => (
					<Card key={pokemon.id} {...pokemon} />
				))}
				<h1>Hello</h1>
			</section>
		</main>
	)
}
