import PropTypes from 'prop-types'

export function ButtonPagination({
	disabled,
	position,
	handleClick,
	children
}) {
	const buttonStyle = `${disabled ? 'cursor-not-allowed bg-gray-600 opacity-60' : 'lg:hover:bg-[#0080ff]'} ${position}  bg-[#00388f]  lg:gap-1 py-2  lg:text-lg text-white flex items-center border-white/40 w-full justify-center active:bg-[#0080ff]`
	return (
		<button
			type="button"
			disabled={disabled}
			className={buttonStyle}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

ButtonPagination.propTypes = {
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired,
	position: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}
