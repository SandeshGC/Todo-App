import ContextProvider from './contexts/ContextProvider'
import UserRoutes from './Routes'

function App() {
	return (
		<>
			<ContextProvider>
				<UserRoutes />
			</ContextProvider>
		</>
	)
}

export default App
