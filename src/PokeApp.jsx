/* import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon' */
import { useEffect, useState } from 'react'
import pokemons from './api/pokemons.json'
/* import { useGetTodosQuery } from './store/apis' */
/* import { Card } from './components/Card' */
import { PokeCard } from './components/PokeCard'

export function PokeApp() {
	const [page, setPage] = useState(0)
	const [poke, setPoke] = useState([])

	/* 	const { data, isLoading } = useGetTodosQuery(page)
	if (!data) return <h1>Loading...</h1>
	const pokemons = data?.results
	console.log('hola')
	console.log(data) */
	useEffect(() => {
		setPoke(pokemons)
	}, [])

	const nextPage = () => setPage(page + 1)
	const prevPage = () => {
		if (page === 1) return
		setPage(page - 1)
	}

	console.log(poke)
	return (
		<>
			<h1 className="text-center text-2xl font-bold ">Poke App</h1>
			<hr />
			{/* <span>Loading: {isLoading ? 'True' : 'False'}</span> */}
			{/* <Card key={pokemon.id} pokemon={pokemon} /> */}
			<section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 space-y-24 bg-slate-900">
				{poke?.map((pokemon) => (
					<PokeCard key={pokemon.id} {...pokemon} />
				))}
			</section>
			{/* {isLoading && <li>Cargando...</li>} */}
			<button onClick={prevPage} className="m-2 border border-cyan-500 p-2">
				Prev
			</button>
			<button onClick={nextPage} className="m-2 border border-cyan-500 p-2">
				Next
			</button>
		</>
	)
}
