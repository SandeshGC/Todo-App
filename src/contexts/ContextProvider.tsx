import { ReactNode } from 'react'
import CreateTodoModalProvider from './CreateTodoModalContext'

const ContextProvider = ({ children }: { children: ReactNode }) => {
	return <CreateTodoModalProvider>{children}</CreateTodoModalProvider>
}

export default ContextProvider
