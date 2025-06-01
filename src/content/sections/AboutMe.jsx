import React from 'react'

export const AboutMe = () => {
  return (
    <>
    
   
    <div className='text-white font-spartan min-h-screen flex flex-col items-center p-10 gap-9'>
        <h2 className="font-extrabold text-4xl lg:text-7xl md:text-6xl">Acerca de mi</h2>
        <button className='cursor-pointer font-bold w-35 h-15 bg-gradient-to-r from-[#6CB6C3] to-[#2C4C7C] rounded-full transition duration-300 hover:-translate-y-1
'>Ver CV</button>
        <div className='flex flex-col gap-15 md:flex-row md:p-10 md:justify-center'>
            <div className='relative  md:w-2/5'>
                <div className="absolute -inset-2 rounded-xl bg-blue-500 blur-lg opacity-30"></div>
                <div className='h-full bg-[#030711] relative z-10 shadow-md p-5 rounded-3xl border-[rgb(120,219,255,0.15)] border-1'>
                    <h3 className='pb-5 font-extrabold text-2xl text-[#6AB2BF]'>Historia</h3>
                    <p className='text-lg'>Tengo 20 años y a temprana edad me interese por el desarrollo de software, mis primeros pasos y el cual desarrolle mi logica fue en .NET con C#, pero desde el area que más me cautivo fue el desarrollo web y desde entonces me he capacitado para realizar buenas practicas</p>
                </div>
         
            </div>

            <div className='relative  md:w-2/5'>
                <div className="absolute -inset-2 rounded-xl bg-blue-500 blur-lg opacity-30"></div>
                <div className='bg-[#030711] relative z-10 shadow-md p-5 rounded-3xl border-[rgb(120,219,255,0.15)] border-1'>
                    <h3 className='pb-5 font-extrabold text-2xl text-[#6AB2BF] '>Valores</h3>
                    <p className='text-lg'>
                    1. Aprendizaje continuo: estoy abierto a aprender nuevas tecnologías. <br /><br />  
                    2. Responsabilidad y compromiso: me tomo cada proyecto con seriedad y me esfuerzo por entregar un trabajo de calidad. <br /><br /> 
                    3. Trabajo en equipo: la colaboracion es clave para mi y me gusta aprender de los demás.
                    </p>
                </div>
               
            </div>
        </div>
      

    </div>



     </>
  )
}
