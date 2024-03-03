import { PropTypes } from 'prop-types'

export function HeightWeight({ height, weight }) {
	return (
		<div className="flex justify-around px-5 text-center  ">
			<div className="grid w-28 ">
				<span className="text-3xl ">{height}m</span>
				<span className="text-xl opacity-70">height</span>
			</div>
			<div className="h-3/4 w-[1px] self-center rounded-full bg-current opacity-30 "></div>
			<div className="grid w-28">
				<span className="text-3xl ">{weight}kg</span>
				<span className="text-xl opacity-70">weight</span>
			</div>
		</div>
	)
}
HeightWeight.propTypes = {
	height: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired
}
