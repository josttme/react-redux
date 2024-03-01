import PropTypes from 'prop-types'
export function PokeType({ type, color }) {
	return (
		<span
			style={{
				color,
				backgroundColor: `${color}30`
			}}
			className="grid h-10 w-28 place-content-center rounded-2xl border  border-transparent p-1 text-2xl duration-150 ease-in-out group-hover:border-current"
		>
			{type}
		</span>
	)
}

PokeType.propTypes = {
	type: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}
