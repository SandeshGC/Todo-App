import { Box, Container, Typography } from '@mui/material'
import { FC, createContext } from 'react'
import Task from './Task'
import { TaskListType } from '../types/entities'

interface TaskListProps extends TaskListType {}

export const TaskListContext = createContext({})

const TaskList: FC<TaskListProps> = ({ id: listId, title, tasks }) => {
	return (
		<Container>
			<Box py={4}>
				<TaskListContext.Provider value={listId}>
					<Typography variant="h6">{title}</Typography>
					{tasks.map(task => {
						return (
							<Task
								key={task.id}
								// listId={listId}
								id={task.id}
								title={task.title}
								isComplete={task.isComplete}
							/>
						)
					})}
				</TaskListContext.Provider>
			</Box>
		</Container>
	)
}

export default TaskList
