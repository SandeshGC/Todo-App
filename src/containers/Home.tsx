import { Box, Container, TextField, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import Header from '../components/Header'

interface HomeProps {}

const Home: FC<HomeProps> = ({}): ReactElement => {
	return (
		<Box component={"body"}>
			<Header />

			<Container>
				<Box>
					<TextField label="Add a task" variant="standard" />
				</Box>
			</Container>
			<Container>
				<Typography variant="body1">
					Here will be the list of items like in google keep
				</Typography>
			</Container>
		</Box>
	)
}

export default Home
