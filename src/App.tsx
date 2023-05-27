import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./containers/Layout/Layout"
import { Landing, Page404 } from "./pages"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
	typography: {
		fontFamily: "Raleway",
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Landing />} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
