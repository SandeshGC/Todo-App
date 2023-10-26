import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { TaskType } from '../types/entities'

interface TaskProps extends TaskType {}

const Task: FC<TaskProps> = ({ id, title, description, isComplete }) => {
	return (
		<Box>
			
			<Typography variant="h6">{title}</Typography>
			<Typography variant="body2">{description}</Typography>
		</Box>
	)
}

export default Task
