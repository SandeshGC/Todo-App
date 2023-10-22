import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'

type HeaderProps = {}

const Header: FC<HeaderProps> = ({}) => {
	return (
		<Box borderBottom={'2px solid #e5e5e5'} bgcolor={'#e5e5e5'}>
			<Container>
				<Typography variant="h1" textAlign={'center'}>
					Todo App
				</Typography>
			</Container>
		</Box>
	)
}

export default Header
