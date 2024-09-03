import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Discover from "./pages/Discover"
import Events from "./pages/Events"
import Home from "./pages/Home"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="*"
						element={
							<Navigate
								to="/discover"
								replace
							/>
						}
					/>
					<Route
						to="/"
						element={<Home />}
					>
						<Route
							index
							element={<Navigate to="events" />}
						/>
						<Route
							path="events"
							element={<Events />}
						/>
					</Route>

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
