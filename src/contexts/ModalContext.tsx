import { ReactNode, createContext, useState } from 'react'

const initialModalState = {
	isCreateTaskModalOpen: false,
	isDeleteTaskModalOpen: false,
	isViewTaskModalOpen: false,
	openCreateTaskModal: () => {},
	openDeleteTaskModal: (taskId: string) => {},
	openViewTaskModal: (taskId: string) => {},
	closeModal: () => {}
}
export const ModalContext = createContext(initialModalState)

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modals, setModals] = useState({
		isCreateTaskModalOpen: false,
		isDeleteTaskModalOpen: false,
		isViewTaskModalOpen: false,
		activeTaskId: '',
		openCreateTaskModal: () => {
			setModals({
				...modals,
				isCreateTaskModalOpen: true
			})
		},
		openDeleteTaskModal: (taskId: string) => {
			setModals({
				...modals,
				isDeleteTaskModalOpen: true,
				activeTaskId: taskId
			})
		},
		openViewTaskModal: (taskId: string) => {
			setModals({
				...modals,
				isViewTaskModalOpen: true,
				activeTaskId: taskId
			})
		},
		closeModal: () => {
			setModals({
				...modals,
				isCreateTaskModalOpen: false,
				isDeleteTaskModalOpen: false,
				isViewTaskModalOpen: false,
				activeTaskId: ''
			})
		}
	})

	return (
		<ModalContext.Provider value={modals}>{children}</ModalContext.Provider>
	)
}

export default ModalProvider
