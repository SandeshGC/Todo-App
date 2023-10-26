import { ReactNode } from 'react'
import ModalProvider from './ModalContext'

const ContextProvider = ({ children }: { children: ReactNode }) => {
	return <ModalProvider>{children}</ModalProvider>
}

export default ContextProvider
