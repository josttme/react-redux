import { NavBar } from './NavBar'

export function Header() {
	return (
		<header className="mb-10 w-full lg:h-[76dvh] lg:pt-5">
			<NavBar />
			<div className=" mx-auto  mt-52 max-w-lg p-5 md:ml-20 lg:mt-10">
				<img
					className="w-full drop-shadow-lg"
					src="/pokemon-logo.svg"
					alt="Pokemon Logo"
				/>
			</div>
			<section className="bg-brand-primary text-text-color max-w-4xl space-y-5 rounded-3xl px-5 py-6 lg:ml-5 lg:px-10">
				<h1 className="text-center text-4xl font-bold ">PokeRedux</h1>
				<p className="text-lg">
					Explora el mundo Pokémon con esta aplicación web, desarrollada con
					ReactJS y Redux. Accede a la información de los Pokémon sin necesidad
					de realizar una nueva solicitud a la API, navega por la lista de forma
					fácil y rápida, guarda tus favoritos.
				</p>
				<section className="flex flex-col justify-between space-y-5 md:flex-row ">
					<ul className="marker:text-blue-secondary list-inside list-disc text-lg">
						Tecnologías utilizadas:
						<li>ReactJS</li>
						<li>Tailwind</li>
						<li>Redux</li>
						<li>RTK Query</li>
					</ul>
					<ul className="marker:text-blue-secondary list-inside list-disc text-lg">
						Funcionalidades principales:
						<li>Manejo de estado con Redux</li>
						<li>Cacheo de la API con RTK Query</li>
						<li>Guardar favoritos en local storage</li>
					</ul>
					<ul className="marker:text-blue-secondary list-inside list-disc text-lg">
						Propósito del proyecto:
						<li>Practicar Redux</li>
					</ul>
				</section>
				<a
					href="https://github.com/josttme/react-redux"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex h-12 w-52  items-center justify-center gap-x-3 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 "
				>
					<span>Gitub Code</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</a>
			</section>
		</header>
	)
}
