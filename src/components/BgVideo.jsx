export function BgVideo() {
	return (
		<section className="fixed inset-0 -z-10">
			<video
				className="h-[85vh] w-full object-cover object-top"
				autoPlay
				loop
				muted
				preload="metadata"
			>
				<source src="/poke.mp4#t=0.1" type="video/mp4" alt="Pokemon video" />
			</video>
			<div className="absolute inset-0 bg-black/20"></div>
		</section>
	)
}
