import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between custom-container  text-white py-4 ">
			<NavLink
				to="/"
				className="text-3xl font-bold"
			>
				CampusLenz
			</NavLink>
			<ul className="headerNavbar flex items-center  gap-8 text-xl">
				<li>
					<NavLink
						className="block px-4 py-2 relative"
						to="events"
					>
						Events
					</NavLink>
				</li>
				<li>
					<NavLink
						className="block px-4 py-2 relative"
						to="upload"
					>
						Upload
					</NavLink>
				</li>
				<li>
					<NavLink
						className="block px-4 py-2 relative"
						to="view-posts"
					>
						View my posts
					</NavLink>
				</li>
				<li>
					<NavLink
						className="block px-4 py-2 relative"
						to="dashboard"
					>
						Dashboard
					</NavLink>
				</li>
			</ul>
			<button>
				<Link to="/login">Logout</Link>
			</button>
		</nav>
	)
}
