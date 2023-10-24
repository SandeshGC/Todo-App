import { Box, Container, IconButton, TextField } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { FC } from 'react'

interface TaskInputFieldProps {}

const TaskInputField: FC<TaskInputFieldProps> = ({}) => {
	return (
		<Container>
			<Box>
				<TextField label="Add a task" variant="standard" />

				<Box position={'fixed'} bottom={5} right={5}>
					<IconButton children={<AddCircleOutlineIcon fontSize='large'/>}  size='large' />
				</Box>
			</Box>
		</Container>
	)
}

export default TaskInputField
