import { useEffect, useState } from 'react'
import { useGetTodosQuery } from '../store/apis'
import { PokeCard } from './pokeCard/PokeCard'
import { Pagination } from './pagination'

export function PokeList() {
	const [page, setPage] = useState(0)
	useEffect(() => {
		window.scrollTo(0, 550)
	}, [page])
	const { data } = useGetTodosQuery(page)
	if (!data) return <h1>Loading...</h1>
	const pokemons = data?.results

	const nextPage = (jumpBy = 1) => {
		if (page === 86) return
		setPage(page + jumpBy)
	}

	const prevPage = (jumpBy = 1) => {
		if (page === 0) return
		if (page < 10) {
			setPage(page - 1)
		} else {
			setPage(page - jumpBy)
		}
	}

	return (
		<>
			<section className="relative z-10  grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-center gap-5 space-y-20 px-2 pb-14 pt-20 lg:p-10 ">
				{pokemons?.map((pokemon) => (
					<PokeCard key={pokemon.name} {...pokemon} />
				))}
			</section>
			<Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
		</>
	)
}
