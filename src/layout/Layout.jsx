import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { FooterL } from "./FooterL"

export const Layout = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-[#030711]">
        <Navbar></Navbar>
        <main className="pt-5">
            <Outlet/>
        </main>
        <footer>
          <FooterL></FooterL>
        </footer>
    </div>
  )
}
