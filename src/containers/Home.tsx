import { Box, IconButton } from '@mui/material'
import { FC, ReactElement, useContext } from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import TaskInputField from '../components/TaskInputField'
import { ModalContext } from '../contexts/CreateTodoModalContext'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
	const modals = useContext(
		ModalContext
	)

	console.log(modals)
	
	return (
		<Box>
			<Header />

			{modals.isCreateTaskModalOpen && <TaskInputField />}

			<TaskList />

			<Box position={'fixed'} bottom={5} right={5}>
				<IconButton
					onClick={modals.openCreateTaskModal}
					children={<AddCircleOutline fontSize="large" />}
					size="large"
				/>
			</Box>
		</Box>
	)
}

export default Home
