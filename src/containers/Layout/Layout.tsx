import { Outlet } from "react-router-dom"
import { Header, Footer } from ".."
import { Container, Stack } from "@mui/material"

const Layout = () => {
	return (
		<Stack
			direction={"column"}
			height={"100vh"}
		>
			<Stack direction={"column"} component={"main"}>
				<Header />
				<Container sx={{marginTop:"80px" }}>
					<Outlet />
				</Container>
			</Stack>

			<Footer />
		</Stack>
	)
}

export default Layout
