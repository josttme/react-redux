import { useState } from 'react'
import { useGetTodosQuery } from '../store/apis'
import { PokeCard } from './pokeCard/PokeCard'

export function PokeList() {
	const [page, setPage] = useState(0)

	const { data } = useGetTodosQuery(page)
	if (!data) return <h1>Loading...</h1>
	const pokemons = data?.results

	const nextPage = () => setPage(page + 1)
	const prevPage = () => {
		if (page === 0) return
		setPage(page - 1)
	}
	return (
		<main className="space-y-5 bg-[#000021] pb-10">
			<section className="relative grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 space-y-24 rounded-tl-3xl rounded-tr-3xl  p-10 ">
				{pokemons?.map((pokemon) => (
					<PokeCard key={pokemon.name} {...pokemon} />
				))}
			</section>
			<div className="mx-auto flex w-full justify-center">
				<button
					type="button"
					onClick={prevPage}
					className="rounded-l-md border-r border-gray-100 bg-[#00388f] px-5 py-2 text-lg text-white hover:bg-[#0080ff] hover:text-white"
				>
					Prev
				</button>
				<button
					type="button"
					onClick={nextPage}
					className="rounded-r-md border-l border-gray-200 bg-[#00388f] px-5 py-2 text-lg text-white hover:bg-[#0080ff] hover:text-white"
				>
					Next
				</button>
			</div>
		</main>
	)
}
