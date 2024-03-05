import { NavLink } from 'react-router-dom'

export function Header() {
	return (
		<header className=" relative h-[75dvh] w-full">
			<section className="relative z-20">
				<div className=" mx-auto mt-10 max-w-lg p-5 md:ml-20">
					<img
						className="w-full drop-shadow-lg"
						src="/pokemon-logo.svg"
						alt="Pokemon Logo"
					/>
				</div>
				<h1 className="text-center text-5xl font-bold text-white/90  ">
					Poke App
				</h1>
				<nav className="fixed left-0 right-0 top-0 mx-auto mt-1 flex h-12 w-full max-w-5xl items-center justify-center rounded-full bg-[#000021]/80 ">
					<NavLink
						to="/favorites"
						className="text-2xl font-bold text-[#0080ff]"
					>
						Favorites
					</NavLink>
				</nav>
			</section>
		</header>
	)
}
