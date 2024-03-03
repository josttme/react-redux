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
		<>
			<section className="relative z-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 space-y-24 p-10 ">
				{pokemons?.map((pokemon) => (
					<PokeCard key={pokemon.name} {...pokemon} />
				))}
			</section>
			<section className="mx-auto flex w-full justify-center">
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
			</section>
		</>
	)
}
