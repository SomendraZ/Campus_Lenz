import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full bg-[--light-purple] z-[999]">
        <Navbar />
      </header>
      <main className="mt-[9vw] lg:mt-[6.5vw]">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
//
