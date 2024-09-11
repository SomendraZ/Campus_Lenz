import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
	return (
		<>
			<header className="fixed top-0 w-full bg-[--bg-clr] z-[999]">
				<Navbar />
			</header>
			<main className="pt-[20vw] pb-8 lg:pt-[6.5vw] ">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
//
