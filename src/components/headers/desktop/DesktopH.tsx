import { Link } from "react-router-dom"
import logo from "../../../images/logo.png"

export default function DesktopH() {
    return (
        <div className="h-[70px] w-screen p-2 shadow fixed top-0 z-20">
            <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                <div className="px-2">
                    <Link to="/">
                        <img src={logo} className="h-12 py-1 " alt="logo" />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex gap-8">
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/projetos">Projetos</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/agendamentos">Agendamentos</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/agendamentos">Comentarios</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className="text-[#0b3558] font-bold hover:text-blue-800" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-center w-28">
                </div>
            </div>
        </div>
    )
}