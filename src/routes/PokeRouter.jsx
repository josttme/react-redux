import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
			</Route>
		</Routes>
	)
}
