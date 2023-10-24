import Home from './containers/Home'
import ContextProvider from './contexts/ContextProvider'

function App() {
	return (
		<>
			<ContextProvider>
				<Home />
			</ContextProvider>
		</>
	)
}

export default App
