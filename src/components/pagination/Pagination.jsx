import { PropTypes } from 'prop-types'
import { ButtonPagination } from './ButtonPagination'
import { SvgDoubleLeft, SvgLeft } from '../icons'

export function Pagination({ page, nextPage, prevPage }) {
	return (
		<section className="mx-auto flex w-11/12 max-w-md justify-center px-2">
			<ButtonPagination
				handleClick={() => prevPage(10)}
				disabled={page < 10}
				position=" px-2 lg:px-3 rounded-l-lg "
			>
				<SvgDoubleLeft className="w-4" strokeWidth="2" />
				10
			</ButtonPagination>

			<ButtonPagination
				handleClick={() => prevPage(1)}
				disabled={page === 0}
				position="border-x px-2 lg:px-6"
			>
				<SvgLeft className="w-4" strokeWidth="2" />
				Prev
			</ButtonPagination>

			<span className="xs:bg-red-200 grid  aspect-square h-12 w-12 place-content-center self-center bg-[#00388f] p-2 text-xl text-white">
				{page + 1}
			</span>
			<ButtonPagination
				handleClick={() => nextPage(1)}
				disabled={page === 86}
				position="border-x px-2 lg:px-6"
			>
				Next
				<SvgLeft className="w-4 rotate-180" strokeWidth="2" />
			</ButtonPagination>

			<ButtonPagination
				handleClick={() => nextPage(10)}
				disabled={page > 76}
				position=" px-2  lg:px-3 rounded-r-lg"
			>
				10
				<SvgDoubleLeft className="w-4 rotate-180" strokeWidth="2" />
			</ButtonPagination>
		</section>
	)
}

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	nextPage: PropTypes.func.isRequired,
	prevPage: PropTypes.func.isRequired
}
