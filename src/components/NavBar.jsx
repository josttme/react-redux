import { NavLink } from 'react-router-dom'

export function NavBar() {
	const activeClass =
		'  bg-[#0080ff] text-[#000021]/70 px-2 text-lg lg:text-2xl rounded-lg duration-150 font-bold'
	const classDefault =
		' px-2 text-lg  lg:text-2xl font-bold text-[#eae8e5]  duration-150 lg:hover:text-[#0080ff]'
	return (
		<nav className="fixed left-0 right-0 top-0 mx-auto mt-1 flex h-12 w-11/12 max-w-3xl  items-center  justify-center gap-5  rounded-full  bg-[#000021]/50 lg:px-5 ">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? activeClass : classDefault)}
			>
				Home
			</NavLink>
			<NavLink
				to="/favorites"
				className={({ isActive }) => (isActive ? activeClass : classDefault)}
			>
				Favorites
			</NavLink>
		</nav>
	)
}
