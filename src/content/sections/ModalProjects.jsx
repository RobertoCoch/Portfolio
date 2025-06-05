import Proyect1Video from '../../assets/videos/demo-englishub.mp4'
import GitIcon from '../../assets/images/GitHub.png'
import { X } from 'lucide-react';

const modalProyectos = [
    {
           funciones: "Autenticación con matricula y contraseña, visualizacion dimacia de datos según el rol, CRUD de tareas, clases y avisos, Uso de modales, estados locales y componentes personalizados en React",
           video: Proyect1Video,
           url: "https://github.com/RobertoCoch/p-englishub",
    }
];


export const ModalProjects = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null;
  return (
    <>
      <div 
        className="fixed inset-0 bg-[rgba(0,0,0,0.50)] bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out p-5"
        onClick={() => setIsOpen(false)}
     
      >
        {/* Modal con animación - stopPropagation para evitar que se cierre al hacer clic en el modal */}
        <div 
          className="bg-[#030711] w-full md:w-7/10 rounded-3xl shadow-xl
           transform transition-all duration-300 ease-in-out scale-100 opacity-100 "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center p-4 justify-end">
            <button 
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
          {modalProyectos.map((modalProyecto, index) => (
            <div className='flex flex-col gap-5 md:flex-row-reverse'>
                <div className='flex justify-center p-5'>
                    <video controls className='w-500 rounded-2xl'>
                        <source src={modalProyecto.video} type="video/mp4"/>
                    </video>
                </div>
                <div className='text-white p-9 flex  flex-col gap-3'>
                    <h3 className='font-bold text-2xl self-start'>Funciones Clave:</h3>
                    <p> {modalProyecto.funciones}</p>
                     <div className='flex flex-col gap-5'>
                      <h3 className='font-bold text-2xl self-start'>Repositorio:</h3>
                      <button className='cursor-pointer border-2 p-2 rounded-full w-35 border-[rgb(120,219,255,0.15)] transition duration-300 hover:-translate-y-1'>
                        <a href={modalProyecto.url} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                          <img className='w-10 h-10' src={GitIcon} alt="" />
                          <p>Ver</p>
                        </a>
                      </button>
                     </div>
                </div>
               
            </div>
          ))}
          
        </div>
      </div>
    </>
  )
}
