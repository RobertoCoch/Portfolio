import { useState } from "react";
import { ChevronDown } from "lucide-react"
import { ModalPDF } from "../../components/ModalPDF";
import KardexPDF from '../../assets/documents/kardex-roberto-contreras.pdf'


export const Education = () => {
   const [modalAbierto, setModalAbierto] = useState(false);
    const cerrarModal = () => setModalAbierto(false);
    const [fileURL, setFileURL] = useState(null);
  
  
    const handdleClick = (file) => {
      setFileURL(file);
      setModalAbierto(true);
    };

  return (
    <>
    <div className="flex flex-col text-white min-h-screen font-spartan items-center p-10 gap-10 border-t-1 border-[rgb(255,255,255,0.15)] justify-center bg-gradient-to-r from-[#0f151a] to-[#202d38]">
        <h2 className="font-extrabold text-4xl lg:text-7xl md:text-6xl p-5">Educación</h2>
        <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col gap-3 md:w-1/2 lg:pl-10">
              <h3 className="text-3xl lg:text-5xl font-bold">Ingeniería Informática</h3>
              <h4 className="text-lg lg:text-3xl font-bold">TecNM Campus Región Sierra</h4>
              <p className="text-lg lg:text-2xl">7° semestre de 9 - En curso</p>
              <p className="text-lg lg:text-2xl"> <span className="font-bold">Especialidad:</span> Desarrollo de Aplicaciones con Nuevas Tecnologías</p>
              <p className="text-lg lg:text-2xl"><span className="font-bold">Promedio General:</span> 95</p>
               <button onClick={() => handdleClick(KardexPDF)} className='border-[rgb(120,219,255,0.15)] cursor-pointer border-2  w-50 h-15 rounded-full transition duration-300 hover:-translate-y-1'>Ver Kardex</button>
            </div>

            <div className="md:w-1/2">
              <div className="flex font-extrabold text-lg text-[#6AB2BF]">
                  <ChevronDown/>
                  <h3>Destacados</h3>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col gap-3">
                    <div className="border-2 border-[rgb(120,219,255,0.15)] rounded-3xl p-5 ">
                        <p>
                          Especializacion en desarrollo web con enfoque en arquitectura cliente - servidor
                        </p>
                    </div>

                    <div className="border-2 border-[rgb(120,219,255,0.15)] rounded-3xl p-5">
                        <p>
                          Capacidad para aplicar metodologias modernas en la gestion y desarrollo de software
                        </p>
                    </div>
                </div>
               
                <div className="flex flex-col gap-3">
                  <div className="border-2 border-[rgb(120,219,255,0.15)] rounded-3xl p-5">
                    <p>
                      Formación integral con vision etica, profesional y compromiso con la mejora organizacional
                    </p>
                  </div>

                  <div className="border-2 border-[rgb(120,219,255,0.15)] rounded-3xl p-5">
                    <p>
                      Participaciones en eventos academicos y presentación de proyectos tecnologicos
                    </p>
                  </div>
                </div>
                
            </div>

          </div>
        </div>
       
    </div>
    <ModalPDF isOpen={modalAbierto} onClose={cerrarModal} fileUrl={fileURL} />
    </>
  )
}
