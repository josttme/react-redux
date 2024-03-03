import { PropTypes } from 'prop-types'
import { PokeType } from './PokeType'

export function PokeTypes({ types, pokeTypesColorIcons }) {
	return (
		<div className="flex justify-center gap-5 ">
			{types.map(({ slot, type }) => (
				<PokeType
					key={slot}
					type={type.name}
					{...pokeTypesColorIcons[type.name]}
				/>
			))}
		</div>
	)
}
PokeTypes.propTypes = {
	types: PropTypes.array.isRequired,
	pokeTypesColorIcons: PropTypes.object.isRequired
}
