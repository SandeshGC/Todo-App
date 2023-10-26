import { ReactNode } from 'react'
import ModalProvider from './ModalContext'
import { ThemeProvider } from '@mui/material'
import theme from '../utils/theme'

const ContextProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<ModalProvider>{children}</ModalProvider>
		</ThemeProvider>
	)
}

export default ContextProvider
