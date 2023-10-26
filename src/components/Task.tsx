import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { TaskListType, TaskType } from '../types/entities'
import { Close } from '@mui/icons-material'
import { deleteTask, toggleTaskStatus } from '../helpers/taskFunctions'
import { TaskListContext } from './TaskList'

interface TaskProps extends TaskType {
	listId: string
}

const Task: FC<TaskProps> = ({ listId, id: taskId, title, isComplete }) => {
	const value = useContext(TaskListContext)
	console.log(value)

	return (
		<Box display={'flex'} alignItems={'center'}>
			<Checkbox
				checked={isComplete}
				onClick={() => toggleTaskStatus(listId, taskId)}
			/>
			<Box width={'320px'}>
				<Typography color={isComplete ? 'green' : ''} variant="h6">
					{title}
				</Typography>
			</Box>

			<IconButton
				children={<Close />}
				onClick={() => deleteTask(listId, taskId)}
			/>
		</Box>
	)
}

export default Task
