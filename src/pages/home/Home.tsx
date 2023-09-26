import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='p-4' data-aos="fade-up" data-aos-duration="3000">
            <h1 className='text-blue-950 text-5xl font-bold mt-12'>Agendamento facil e rapido</h1>
            <p className='text-blue-600 text-3xl font-bold mt-2 mb-4'>Referência em torneamento de precisão</p>
            <div>
                <p>Nos da Torneadora PrecisionTech somos uma empresa especializada em serviços de torneamento de precisão. Forneçemos peças de alta qualidade para uma variedade de indústrias, desde automobilísmo até aeroespacial. </p>
            </div>
            <Link to="/agendamento" className='inline-block bg-blue-700 text-white p-2 rounded-sm'>Encomende agora mesmo sua peça</Link>
        </div >
    )
}