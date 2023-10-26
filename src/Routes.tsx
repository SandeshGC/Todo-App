import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'

const UserRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default UserRoutes
