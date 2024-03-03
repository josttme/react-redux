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
				<h1 className="text-center text-5xl font-bold text-white/90 ">
					Poke App
				</h1>
			</section>
		</header>
	)
}
