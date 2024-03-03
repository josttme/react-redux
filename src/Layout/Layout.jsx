import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

export function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
