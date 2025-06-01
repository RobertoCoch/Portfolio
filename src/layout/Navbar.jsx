import LogoGithub from '../assets/images/GitHub.png'
import LogoGmail from '../assets/images/Gmail.png'
import LogoLinkedin from '../assets/images/Likedin.png'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 bg-[#030711]/50 backdrop-blur-sm text-lg font-bold w-screen h-20 text-white font-spartan flex justify-center items-center gap-4 border-b-1 border-[rgb(255,255,255,0.15)]">
        <a  href="https://www.linkedin.com/in/josé-roberto-contreras-chablé-600305274" target="_blank" rel="noopener noreferrer" className="h-15 cursor-pointer p-2 flex items-end gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <img className="w-9 h-9" src={LogoLinkedin} alt="" />
            <p className='hidden md:inline'>Linkedin</p>
        </a>

        <a href="https://github.com/RobertoCoch" target="_blank" rel="noopener noreferrer" className="h-15 cursor-pointer p-2 flex items-end gap-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <img className='w-10 h-10' src={LogoGithub} alt="" />
            <p className='hidden md:inline'>GitHub</p>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contreraschableroberto@gmail.com" target="_blank" rel="noopener noreferrer" className="h-15 cursor-pointer p-2 flex items-end gap-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <img className='w-10 h-10' src={LogoGmail} alt="" />
            <p className='hidden md:inline'>Gmail</p>
        </a>
    </nav>

    
  )
}
