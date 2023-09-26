import { useState } from 'react'
import "./mobileH.css"
import logo from "../../../assets/logo.png"
import logoMobile from "../../../assets/logoMobile.png"
import { Link } from 'react-router-dom'

type Props = {
    windowWidth: number
}

export default function MobileH({ windowWidth }: Props) {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className={`h-min-[68px] ${menuOpened && "h-screen fixed top-0 bottom-0 left-0 right-0 z-20 bg-white"} 
        flex flex-col py-2 border-b`}>
            <div className='flex items-center justify-between'>
                <div className='bg-transparent'>
                    <img src={windowWidth <= 425 ? logoMobile : logo} className='ms-3 h-16 py-1 invert' alt="" />
                </div>
                <div className="bg-transparent mx-2 h-[28px] w-[28px] flex flex-col justify-center gap-[6px] cursor-pointer" onClick={() => setMenuOpened(!menuOpened)}>
                    <span className={`border border-black ${menuOpened && "header-item-line1"}`}></span>
                    <span className={`border border-black ${menuOpened && "hidden"}`}></span>
                    <span className={`border border-black ${menuOpened && "header-item-line2"}`}></span>
                </div>
            </div>
            {menuOpened &&
                <div className='p-4 w-full'>
                    <nav>
                        <ul>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/"}>Inicio</Link></li>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/projetos"}>Projetos</Link></li>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/agendar"}>Agendar</Link></li>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/serviços"}>Serviços</Link></li>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/blog"}>Blog</Link></li>
                            <li className='py-6 text-xl font-bold border-b'><Link to={"/"}>Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    )
}