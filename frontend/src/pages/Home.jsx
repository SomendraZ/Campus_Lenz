import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full bg-[--nav-clr] z-[999]">
        <Navbar />
      </header>
      <main className="pt-[12.5vw] lg:pt-[6.5vw]  bg-[#BEB6A2]">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
//
