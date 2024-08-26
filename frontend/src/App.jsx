import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Discover from "./pages/Discover"

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
