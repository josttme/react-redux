import PropTypes from 'prop-types'
import { useState } from 'react'
import { SvgPokeBall } from '../icons'

export function PokeImage({ image }) {
	const [loaded, setLoaded] = useState(false)
	const defaultImage =
		'https://res.cloudinary.com/josttme/image/upload/f_auto,q_auto/v1/Projects/poke/video/mfyzecql5xbqcpd2jurw'
	const src = image || defaultImage

	return (
		<div className=" relative mx-auto -mb-5 -mt-28 grid h-80 w-full content-end justify-center  ">
			<img
				src={src}
				className={`${loaded && 'opacity-100'} w-full opacity-0 drop-shadow-lg saturate-[1.5] transition-all duration-200 ease-in-out group-hover:-translate-y-5 group-hover:scale-110`}
				onLoad={() => setLoaded(true)}
				alt="Pokemon Image"
			/>
			{!loaded && (
				<div
					className={`${loaded && 'opacity-0'} absolute inset-0 mx-auto grid place-content-center self-center opacity-100 transition-all `}
				>
					<SvgPokeBall className="w-full  animate-pulse duration-150" />
				</div>
			)}
		</div>
	)
}

PokeImage.propTypes = {
	image: PropTypes.string
}
