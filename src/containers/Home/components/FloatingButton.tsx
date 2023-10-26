import { Box, Fab } from '@mui/material'
import CancelOutlined from '@mui/icons-material/CancelOutlined'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import { useContext } from 'react'
import { ModalContext } from '../../../contexts/ModalContext'
import TasksModal from '../../../components/Modals/TasksModal'

type Props = {}

const FloatingButton = (props: Props) => {
	const modals = useContext(ModalContext)

	return (
		<Box position={'fixed'} bottom={5} right={5}>
			{modals.isCreateTaskModalOpen ? (
				<Fab onClick={modals.closeModal} color="primary" aria-label="add">
					<CancelOutlined fontSize="large" />
				</Fab>
			) : (
				<Fab
					onClick={modals.openCreateTaskModal}
					color="primary"
					aria-label="add"
				>
					<AddCircleOutline fontSize="large" />
				</Fab>
			)}

			<TasksModal />
		</Box>
	)
}

export default FloatingButton
