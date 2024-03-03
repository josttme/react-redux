import React from 'react'
import PropTypes from 'prop-types'
export function PokeType({ type, icon, color }) {
	return (
		<div
			style={{
				color,
				backgroundColor: `${color}30`
			}}
			className="text-md flex h-10 w-28 items-center justify-center gap-2  rounded-2xl border border-transparent p-1 font-semibold uppercase duration-150 ease-in-out group-hover:border-current"
		>
			<div className="h-4 w-4 fill-current">{icon}</div>
			{type}
		</div>
	)
}

PokeType.propTypes = {
	type: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
	color: PropTypes.string.isRequired
}
