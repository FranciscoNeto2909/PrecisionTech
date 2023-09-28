import { useState } from 'react'
import logo from "../../../images/logo.png"
import logoMobile from "../../../images/logoMobile.png"
import { Link } from 'react-router-dom'
import "./mobileH.css"

type Props = {
    windowWidth: number
}

export default function MobileH({ windowWidth }: Props) {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className={`bg-[#fafafa] h-min-[70px] shadow-md fixed top-0 z-10 w-full bg-transparent ${menuOpened && "h-screen fixed top-0 bottom-0 left-0 right-0 z-20"} 
        flex flex-col py-2 border-b`}>
            <div className='flex items-center justify-between'>
                <div className='ms-4'>
                    <Link to="/">
                        <img src={windowWidth <= 425 ? logoMobile : logo} className={`${windowWidth <= 425 ? "h-14 py-2 bg-blue-600 rounded-md px-2" : "h-16 py-1"}`} alt="logo" />
                    </Link>
                </div>
                <div className="me-4 h-[28px] w-[28px] flex flex-col justify-center gap-[6px] cursor-pointer" onClick={() => setMenuOpened(!menuOpened)}>
                    <span className={`border border-black ${menuOpened && "header-item-line1"}`}></span>
                    <span className={`border border-black ${menuOpened && "hidden"}`}></span>
                    <span className={`border border-black ${menuOpened && "header-item-line2"}`}></span>
                </div>
            </div>
            {menuOpened &&
                <div className='p-4 w-full'>
                    <nav>
                        <ul>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/"}>Sobre</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/serviços"}>Serviços</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/projetos"}>Projetos</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/agendamentos"}>Agendamentos</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/comentarios"}>Comentários</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className='text-[#0b3558]' to={"/blog"}>Blog</Link>
                            </li>
                            <li className='py-6 text-xl font-bold border-b'>
                                <Link className="text-[#0b3558] font-bold" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    )
}