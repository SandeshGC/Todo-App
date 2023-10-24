import { Box } from '@mui/material'
import { FC, ReactElement } from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import TaskInputField from '../components/TaskInputField'

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
	return (
		<Box component={'body'}>
			<Header />

			<TaskInputField />

			<TaskList />

		</Box>
	)
}

export default Home
