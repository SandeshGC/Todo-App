import { Box, Fab } from '@mui/material'
import { FC, ReactElement, useContext } from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import { ModalContext } from '../contexts/CreateTodoModalContext'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import CreateTaskModal from '../components/Modals/CreateTaskModal'

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
	const modals = useContext(ModalContext)

	return (
		<Box>
			<Header />

			<TaskList />

			<Box position={'fixed'} bottom={5} right={5}>
				{modals.isCreateTaskModalOpen ? (
					<Fab onClick={modals.closeModal} color="primary" aria-label="add">
						<CancelOutlinedIcon fontSize="large" />
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

				<CreateTaskModal />
			</Box>
		</Box>
	)
}

export default Home
