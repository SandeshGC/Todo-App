import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./containers/Layout/Layout"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<h1>Home</h1>} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
