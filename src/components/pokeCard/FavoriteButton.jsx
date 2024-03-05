import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SvgHeart } from '../icons/SvgHeart'
import { toggleLike } from '../../store/slices/pokemon'

export function FavoriteButton({ pokemon }) {
	const dispatch = useDispatch()

	// .state 0btenemos el estado actual
	// .pokeLikes del store
	// .likes     del likesSlice
	// state.pokeLikes.likes accede al array de likes dentro del estado de Redux
	const likes = useSelector((state) => state.pokeLikes.likes)

	// Verificamos si el pokemon actual ya está en el array de likes
	// Utilizamos el operador opcional (?.) para evitar errores si likes es undefined
	const isLiked = likes?.some((like) => like.id === pokemon.id)

	const handleToggleLike = () => {
		// Despachamos la acción toggleLike y pasamos el objeto pokemon completo
		dispatch(toggleLike({ pokemon }))
	}
	const favorite = isLiked
		? 'fill-[#ff234e] stroke-[#ff234e]'
		: 'fill-current stroke-current'
	return (
		<div className="grid justify-center">
			<button
				type="button"
				onClick={handleToggleLike}
				title="Like"
				className=" grid h-8 w-8 place-content-center rounded-full "
			>
				<SvgHeart
					className={`${favorite} grid h-7 w-7 place-content-center stroke-[1.6] duration-75  lg:hover:fill-[#ff234e] lg:hover:stroke-[#ff234e]`}
				/>
			</button>
		</div>
	)
}

FavoriteButton.propTypes = {
	pokemon: PropTypes.object
}
