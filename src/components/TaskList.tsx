import { Box, Container } from '@mui/material'
import { FC, useEffect } from 'react'
import Task from './Task'
import { TaskType } from '../types/entities'
import taskList from '../data/index.json'

interface TaskListProps {}

const TaskList: FC<TaskListProps> = ({}) => {
	const tasks: TaskType[] = taskList

	console.log(tasks)

	return (
		<Container>
			<Box>
				{tasks.map(task => {
					return (
						<Task
							key={task.id}
							id={task.id}
							title={task.title}
							description={task.description}
							isComplete={task.isComplete}
						/>
					)
				})}
			</Box>
		</Container>
	)
}

export default TaskList
