import { FC, ReactElement, useContext, useState } from 'react'
import { Box } from '@mui/material'

import Header from '../../components/Header'
import TaskList from '../../components/TaskList'
import { TaskListType } from '../../types/entities'

import data from '../../data/index.json'

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
	const [taskLists, setTaskLists] = useState<TaskListType[]>(data.taskLists)

	function removeTask(taskId: string) {}

	function toggleTaskStatus(taskId: string) {}

	return (
		<Box>
			<Header />

			{taskLists.map(list => (
				<TaskList key={list.id} {...list} />
			))}
		</Box>
	)
}

export default Home
