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
				<source
					src="https://res.cloudinary.com/josttme/video/upload/f_auto:video,q_auto/v1/Projects/poke/video/bkaovfbzd5rhlnw1yo3b#t=0.1"
					type="video/webm"
					alt="Pokemon video"
				/>
			</video>
			<div className="absolute inset-0 bg-black/20"></div>
		</section>
	)
}
