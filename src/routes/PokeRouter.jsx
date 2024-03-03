import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Home } from '../pages/Home'

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}
