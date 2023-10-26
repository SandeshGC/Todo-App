import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import { FC } from 'react'
import { TaskType } from '../types/entities'
import { Close } from '@mui/icons-material'

interface TaskProps extends TaskType {
	toggleTaskStatus: (taskId: string) => void
	removeTask: (taskId: string) => void
}

const Task: FC<TaskProps> = ({
	id,
	title,
	isComplete,
	toggleTaskStatus,
	removeTask
}) => {
	return (
		<Box display={'flex'} alignItems={'center'}>
			<Checkbox checked={isComplete} onClick={() => toggleTaskStatus(id)} />
			<Box width={'320px'}>
				<Typography color={isComplete ? 'green' : ''} variant="h6">
					{title}
				</Typography>
			</Box>

			<IconButton children={<Close />} onClick={() => removeTask(id)} />
		</Box>
	)
}

export default Task
