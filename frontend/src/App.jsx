import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Discover from "./Components/Discover"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="*"
						element={
							<Navigate
								to="/login"
								replace
							/>
						}
					/>

					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signUp"
						element={<SignUp />}
					/>
					<Route
						path="/discover"
						element={<Discover />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
