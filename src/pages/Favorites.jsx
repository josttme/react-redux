import { useSelector } from 'react-redux'
import { Card } from '../components/pokeCard/PokeCard'

export function Favorites() {
	const pokemons = useSelector((state) => state.pokeLikes.likes)
	if (!pokemons) return <h1>Loading...</h1>

	return (
		<main className="rounded-tl-3xl rounded-tr-3xl bg-[#000021]">
			<section className="relative z-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 space-y-24 p-10 ">
				{pokemons?.map((pokemon) => (
					<Card key={pokemon.id} {...pokemon} />
				))}
				<h1>Hello</h1>
			</section>
		</main>
	)
}
