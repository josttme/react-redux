import { Outlet } from 'react-router-dom'
import { Header, Footer, BgVideo } from '../components'

export function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<BgVideo />
			<Footer />
		</>
	)
}
