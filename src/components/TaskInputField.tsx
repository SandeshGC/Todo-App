import { Box, Container, TextField } from '@mui/material'
import { FC } from 'react'

interface TaskInputFieldProps {}

const TaskInputField: FC<TaskInputFieldProps> = ({}) => {
	return (
		<Container>
			<Box>
				<TextField label="Add a task" variant="standard" />
			</Box>
		</Container>
	)
}

export default TaskInputField
