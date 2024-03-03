export function Header() {
	return (
		<div className=" relative -z-10 h-[80dvh] w-full">
			<div className="fixed inset-0">
				<div className="absolute inset-0"></div>
				<video
					className="h-full w-full object-cover object-top"
					autoPlay
					loop
					muted
					preload="metadata"
				>
					<source src="/poke.mp4#t=0.1" type="video/mp4" alt="Pokemon video" />
				</video>
			</div>
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
		</div>
	)
}
