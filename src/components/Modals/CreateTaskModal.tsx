import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/CreateTodoModalContext'

type Props = {}

const CreateTaskModal = (props: Props) => {
	const modals = useContext(ModalContext)

	console.log(modals.isCreateTaskModalOpen)

	return (
		<Modal
			open={modals.isCreateTaskModalOpen}
			onClose={modals.closeModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					borderRadius: 1,
					width: 400,
					bgcolor: 'white',
					boxShadow: 24,
					p: 4,
					height: 'fit-content',
					padding: 2,
					border: '1px solid #ccc'
				}}
			>
				<Button onClick={modals.closeModal} sx={{ float: 'right' }}>
					<IconButton children={<CloseIcon />} />
				</Button>
				<TextField
					label="Add a task"
					variant="standard"
					id="modal-modal-description"
					onKeyDown={e=> e.key=== "Enter" && console.log("Enter")}
				/>
			</Box>
		</Modal>
	)
}

export default CreateTaskModal
