import { ProgressBar } from '../../components/ProgressBar'
import JavaScriptIcon from '../../assets/images/JS.png'
import SqlIcon from '../../assets/images/sql.png'
import TypescriptIcon from '../../assets/images/typescript.png'
import Csharp from '../../assets/images/csharp-icon.png'
import PythonIcon from '../../assets/images/icons/python-icon.png'
import ReactIcon from '../../assets/images/react-icon.png'
import TailwindIcon from '../../assets/images/tailwind-icon.png'
import ExpressIcon from '../../assets/images/icon-express.png'
import GitIcon from '../../assets/images/git-icon.png'
import PostmanIcon from '../../assets/images/postman-icon.png'
import NodeIcon from '../../assets/images/node-icon.png'
import LaragonIcon from '../../assets/images/laragon-icon.png'




const lenguajes = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    value: 80,
    iconClass: 'w-15 h-15',
  },
  {
    name: 'SQL',
    icon: SqlIcon,
    value: 70,
    iconClass: 'w-13 h-13',
  },
  {
    name: 'C#',
    icon: Csharp,
    value: 55,
    iconClass: 'w-11 h-12',
  },
  {
    name: 'Python',
    icon: PythonIcon,
    value: 55,
    iconClass: 'w-13 h-13',
  }
];

const frameworks = [
    {
        name: 'React',
        icon: ReactIcon,
        value: 75,
        iconClass: 'w-15 h-13',
    },
    {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
        value: 90,
        iconClass: 'w-13 h-10',
    },
    {
        name: 'Express',
        icon: ExpressIcon,
        value: 70,
        iconClass: 'w-14 h-13',
    }
];

const herramientas = [
    {
        name: 'Git & GitHub',
        icon: GitIcon,
        value: 70,
        iconClass: 'w-14 h-13',
    },
    {
        name: 'Postman',
        icon: PostmanIcon,
        value: 70,
        iconClass: 'w-13 h-13',
    },
    {
        name: 'Node.js',
        icon: NodeIcon,
        value: 70,
        iconClass: 'w-13 h-13',
    },
    {
        name: 'Laragon',
        icon: LaragonIcon,
        value: 60,
        iconClass: 'w-14 h-13',
    },
];


export const Skills = () => {
  return (
    <>
        <div className="flex flex-col text-white min-h-screen font-spartan items-center p-10 gap-10">
            <h2 className="font-extrabold text-4xl lg:text-7xl md:text-6xl">Skills</h2>
            <div className='flex flex-col md:flex-row w-full gap-4 md:p-5'>
                <div className='border-1 border-[rgb(120,219,255,0.15)] w-full p-10 flex flex-col items-center rounded-3xl gap-4'>
                    <h3 className='pb-5 font-extrabold text-2xl text-[#6AB2BF]'>Lenguajes</h3>

                    {lenguajes.map((lenguaje, index) => (
                    <div key={index} className='h-24 p-5 flex flex-col text-lg font-medium self-start gap-1 bg-gradient-to-r from-[#19222a] to-[#2f4a61] w-full rounded-3xl'>
                        <div className="flex items-center gap-2">
                        <img className={lenguaje.iconClass} src={lenguaje.icon} alt={lenguaje.name} />
                        <p>{lenguaje.name}</p>
                        </div>
                        
                    </div>
                    ))}
                </div>

                <div className='border-1 border-[rgb(120,219,255,0.15)] w-full p-10 flex flex-col items-center rounded-3xl gap-4'>
                    <h3 className='pb-5 font-extrabold text-2xl text-[#6AB2BF]'>Frameworks / Librerias</h3>

                    {frameworks.map((framework, index) => (
                    <div key={index} className='h-24 p-6 flex flex-col text-lg font-medium self-start gap-1 bg-gradient-to-r from-[#19222a] to-[#2f4a61] w-full rounded-3xl'>
                        <div className="flex items-center gap-2">
                        <img className={framework.iconClass} src={framework.icon} alt={framework.name} />
                        <p>{framework.name}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='border-1 border-[rgb(120,219,255,0.15)] w-full p-10 flex flex-col items-center rounded-3xl gap-4'>
                    <h3 className='pb-5 font-extrabold text-2xl text-[#6AB2BF]'>Herramientas</h3>

                    {herramientas.map((herramienta, index) => (
                    <div key={index} className='h-25 p-5 flex flex-col text-lg font-medium self-start gap-1 bg-gradient-to-r from-[#19222a] to-[#2f4a61] w-full rounded-3xl'>
                        <div className="flex items-center gap-3">
                        <img className={herramienta.iconClass} src={herramienta.icon} alt={herramienta.name} />
                        <p>{herramienta.name}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    </>
  )
}
