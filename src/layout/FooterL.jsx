

export const FooterL = () => {
  return (
    <div className="bg-[#0f151a] flex flex-col text-white h-auto font-spartan items-center gap-2 p-5 border-t-1 border-[rgb(255,255,255,0.15)]">
        <p className="text-center">© 2025 Roberto Contreras. <br className="md:hidden"/> Todos los derechos reservados.</p>
        <div>
        <p className="flex gap-2 font-bold">
            <span><a href="">GitHub </a></span> |
            <span><a href=""> Linkedin </a></span> |
            <span><a href=""> Gmail</a></span> 
        </p>
        </div>
        <p>🚀 Construido con React, Tailwind, Node.js</p>
    </div>
  )
}
