import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
export default function DesktopH() {
    return (
        <div className="h-[70px] p-2 flex shadow-md justify-between items-center">
            <div className="bg-blue-600 rounded-md px-2">
                <img src={logo} className="h-12 py-1" alt="logo" />
            </div>
            <div>
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <Link className="text-[#0b3558] font-bold" to="/agendar">Agendar</Link>
                        </li>
                        <li>
                            <Link className="text-[#0b3558] font-bold" to="/servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link className="text-[#0b3558] font-bold" to="/projetos">Projetos</Link>
                        </li>
                        <li>
                            <Link className="text-[#0b3558] font-bold" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="text-[#0b3558] font-bold" to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-[200px] text-center">
                <Link to="/comentar" className="font-bold rounded-md p-2 text-blue-700 border-2 border-blue-600">Comentar</Link>
            </div>
        </div>
    )
}