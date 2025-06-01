import { useState } from 'react';
import Proyect1Preview from '../../assets/images/previews/preview1.png'
import { ModalProjects } from './ModalProjects';


const proyectos = [
    {
        titulo: "EnglisHub",
        rol: "Desarrollador Full Stack",
        tecnologias: "React, Node.js, Express, MySQL, Tailwind",
        descripcion: "Plataforma Web de inglés enfocado para estudiantes que permite visualizar clases, tareas y calificaciones",
        preview: Proyect1Preview,
    },
];



export const Projects = () => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  return (
    <>
    <div className="flex flex-col text-white min-h-screen font-spartan items-center p-10 gap-10">
        <h2 className="font-extrabold text-4xl lg:text-7xl md:text-6xl">Proyectos</h2>
        <div className='w-full'>
            {proyectos.map((proyecto, index) => (
              <div key={index} className='border-1 border-[rgb(120,219,255,0.15)] w-full p-10 flex flex-col items-center rounded-3xl gap-4 md:flex-row'>
                <div className='flex flex-col gap-1 md:gap-2'>
                  <h3 className='pb-5 font-extrabold text-3xl md:text-6xl text-[#6AB2BF]'>{proyecto.titulo}</h3>
                  <p className='md:text-2xl'><span className='font-extrabold'>Rol:</span> {proyecto.rol}</p>
                  <p className='md:text-2xl'><span className='font-extrabold'>Tecnologias:</span> {proyecto.tecnologias}</p>
                  <p className='md:text-2xl'><span className='font-extrabold'>Descripción:</span> {proyecto.descripcion}</p>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <img className='lg:w-150 rounded-2xl' src={proyecto.preview} alt="" />
                  <button onClick={() => setMostrarDetalles(true)} className='cursor-pointer font-bold w-35 h-15 bg-gradient-to-r from-[#6CB6C3] to-[#2C4C7C] rounded-full transition duration-300 hover:-translate-y-1
'>Ver Detalles</button>
                </div>
                
              </div>
            ))}
        </div>
    </div>
    <ModalProjects isOpen={mostrarDetalles} setIsOpen={setMostrarDetalles} />
    </>
  )
}
