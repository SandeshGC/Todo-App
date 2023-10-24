import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Task from './Task'
import { TaskType } from '../types/entities'

const tasks: TaskType[] = [
	{
		id: 'test1',
		title: 'Task1',
		description: 'This is task 1 very minor task., unimportant.'
	},
	{
		id: 'test2',
		title: 'Task 2',
		description: 'This is task 2. test'
	}
]
interface TaskListProps {}

const TaskList: FC<TaskListProps> = ({}) => {
	return (
		<Container>
			<Box>
				{tasks.map(task => {
					return (
						<Task
							key={task.id}
							title={task.title}
							description={task.description}
						/>
					)
				})}
			</Box>
		</Container>
	)
}

export default TaskList
