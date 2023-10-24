import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface TaskProps {
	title: string
	description: string
}

const Task: FC<TaskProps> = ({ title, description }) => {
	return (
		<Box>
			<Typography variant='h6'>{title}</Typography>
			<Typography variant='body2'>{description}</Typography>
		</Box>
	)
}

export default Task
