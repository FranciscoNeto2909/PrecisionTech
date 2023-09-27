import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import torneadora from "../../assets/torneadora.jpg"

export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section className='lg:mt-8' data-aos="fade-in" data-aos-duration="3000">
                <div className="mx-auto max-w-[1250px] p-4 flex flex-col-reverse items-center lg:px-6 lg:flex-row">
                    <div className='flex-1 self-start lg:mt-4'>
                        <h1 className='text-blue-950 text-3xl font-bold lg:text-5xl'>Agendamento facil e rapido</h1>
                        <p className='text-blue-600 text-[21px] font-bold mt-2 mb-4 lg:text-3xl lg:mt-4'>Referência em torneamento de precisão</p>
                        <div className='my-6'>
                            <p className='text-[#47718b] text-lg'>A PrecisionTech é uma empresa especializada em serviços de torneamento de precisão. Forneçemos peças de alta qualidade para uma variedade de indústrias, desde automobilísmo até aeroespacial. </p>
                        </div>
                        <Link to="/agendamento" className='inline-block bg-blue-600 mt-4 text-white p-2 rounded-md '>Agendar agora</Link>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <img className='mb-8 h-60 rounded-md lg:mb-0 lg:h-96' src={torneadora} alt="" />
                    </div>
                </div>
            </section >
        </>
    )
}