import CouncilIcon from '../../assets/images/icons/council-mexico.png'

const certificados = [
    {
        titulo: "Certificado en HTML y CSS",
        imagen: CouncilIcon,
        lugarFecha: "Council México - Junio 2024",
        descripción: "Fundamentos del desarrollo web con HTML5 semántico, diseño con CSS moderno, responsive design",
    },
    {
        titulo: "Certificado en Python",
        imagen: CouncilIcon,
        lugarFecha: "Council México - Junio 2024",
        descripción: "Introducción a la programación con Python: sintaxis, estructuras de control, funciones, manejo de errores y principios de escritura limpia",
    },
];

export const Certificates = () => {
  return (
    <div className="flex flex-col text-white min-h-screen font-spartan items-center p-10 gap-10 border-t-1 border-[rgb(255,255,255,0.15)] justify-center bg-gradient-to-r from-[#0f151a] to-[#202d38]">
        <h2 className="font-extrabold text-4xl lg:text-7xl md:text-6xl p-5">Certificados</h2>
        <div className="flex flex-wrap gap-4 md:gap-10 justify-center w-full">
            {certificados.map((certificado, index) => (
                <div key={index} className='flex flex-col p-10 gap-3 border-2 border-[rgb(255,255,255,0.15)] rounded-3xl md:w-2/5'>
                    <h3 className='text-3xl font-extrabold text-center'>{certificado.titulo}</h3>
                    <div className='flex flex-col gap-3 items-center'>
                        <img className='w-50 rounded-lg' src={certificado.imagen} alt="" />
                        <h4 className='font-bold text-lg'>{certificado.lugarFecha}</h4>
                    </div>
                    <p className='text-lg'>{certificado.descripción}</p>
                    <button className='border-[rgb(120,219,255,0.15)] cursor-pointer border-2  w-50 h-15 rounded-full transition duration-300 hover:-translate-y-1 self-center justify-self-end'>Ver Certificado</button>
                </div>
            ))}
        </div>
       
    </div>
  )
}
