import { Link } from 'react-router-dom'
import torneadora from "../../images/torneadora.jpg"
import trabalhador from "../../images/trabalhador.jpg"
import piloto from "../../images/piloto.jpg"
import TeamCard from '../../components/teamCard/TeamCard'
import valvulas from "../../images/peças.png"
import { team } from '../../data/team'


export default function Home() {

    return (
        <>
            <section className='bg-white h-screen pt-16 pb-6 md:pt-24 lg:pb-8' data-aos="fade-in" data-aos-duration="2000">
                <div className="bg-white mx-auto max-w-[1250px] p-4 flex flex-col-reverse items-center lg:px-6 lg:flex-row">
                    <div className='bg-white flex-1 self-start lg:mt-4'>
                        <h1 className='bg-white text-blue-950 text-[23px] font-bold sm:text-4xl lg:text-5xl'>Agendamento facil e rapido</h1>
                        <p className='bg-white text-blue-600 text-[18px] font-bold mt-2 sm:text-2xl lg:text-3xl lg:mt-4'>Referência em torneamento de precisão</p>
                        <div className='bg-white mt-4 mb-6'>
                            <p className='bg-white text-[#47718b] text-[16px] max-w-[550px]'>A PrecisionTech é uma empresa especializada em serviços de torneamento de precisão. Forneçemos peças de alta qualidade para uma variedade de indústrias, desde automobilísmo até aeroespacial. </p>
                        </div>
                        <Link to="/agendamento" className='w-full text-lg text-center inline-block bg-blue-600 mt-4 text-white py-4 px-2 rounded-md sm:w-auto'>Agendar agora</Link>
                    </div>
                    <div className='bg-white flex-1 flex justify-end'>
                        <img className='mb-8 h-52 rounded-md md:h-60 lg:mb-0 lg:h-96' src={torneadora} alt="" />
                    </div>
                </div>
            </section >
            <section className='mb-6 py-4 md:h-screen bg-[#E2F2FF] lg:pb-10' data-aos="slide-up" data-aos-duration="800">
                <div className="mx-auto max-w-[1250px] px-4 flex flex-col bg-transparent">
                    <h2 className='text-blue-950 text-3xl font-bold my-6 lg:text-4xl lg:my-10 bg-transparent'>Materiais e Serviços
                    </h2>
                    <div className='card-shadow p-6 rounded-md lg:flex lg:flex-row-reverse lg:justify-between lg:items-start'>
                        <div className='self-center'>
                            <img className='mx-auto h-64 rounded-xl lg:scale-110 lg:me-6 xl:me-10 xl:scale-125 lg:h-72' src={trabalhador} alt="" />
                        </div>
                        <div>
                            <ul>
                                <li className='text-[#47718b] text-xs py-3 border-b md:text-base lg:max-w-[500px] lg:text-lg'>
                                    Especializados em uma ampla gama de materiais e serviços.
                                </li>
                                <li className='text-[#47718b] text-xs py-3 border-b md:text-base lg:max-w-[500px] lg:text-lg'>
                                    Atendendemos às necessidades diversas de nossos clientes com precisão incomparável.
                                </li>
                                <li className='text-[#47718b] text-xs py-3 border-b md:text-base lg:max-w-[500px] lg:text-lg'>
                                    Nossos serviços abrangem desde o torneamento de peças simples até projetos altamente complexos.
                                </li>
                                <li className='text-[#47718b] text-xs py-3 border-b md:text-base lg:max-w-[500px] lg:text-lg'>
                                    Compromissados com a qualidade e a excelência de nossas peças.
                                </li>
                            </ul>
                            <Link className='inline-block p-2 mt-3 rounded-md text-sm text-blue-600 font-bold lg:text-base' to="/serviços">Saiba mais...</Link>
                        </div>
                    </div>
                </div>
            </section >
            <section className='mb-6 py-4 lg:h-screen lg:pt-10' data-aos="slide-up" data-aos-duration="800">
                <div className="mx-auto max-w-[1250px] px-4 flex flex-col">
                    <h2 className='text-blue-950 text-3xl font-bold mb-6 lg:text-4xl'>Equipe</h2>
                    <p className='text-[#47718b] text-base mb-8'>
                        A equipe de funcionários da PrecisionTech é a espinha dorsal da nossa empresa, impulsionando a inovação, a qualidade e a excelência em tudo o que fazemos.
                    </p>
                    <div className='flex flex-col pb-4 gap-4 md:flex-row flex-wrap'>
                        {team.map((person, i) => (
                            <TeamCard person={person} key={i} />
                        ))}
                    </div>
                    <div>
                        <p className='text-[#47718b] text-center mt-4 text-sm sm:text-base'>Agradeçemos profundamente o talento e a dedicação de nossa equipe, pois são eles que tornam possível a nossa liderança na indústria de usinagem de alta precisão.</p>
                    </div>
                </div>
            </section>
            <section className='py-4 h-screen flex items-center lg:pt-10' data-aos="slide-up" data-aos-duration="800">
                <div className="mx-auto max-w-[1250px] px-4 flex flex-col">
                    <div className='mx-auto flex flex-col items-center gap-6 md:flex-row-reverse'>
                        <div className='ms-4 lg:ms-16'>
                            <p className='text-2xl max-w-[600px] lg:text-4xl'>"Meus automóveis tiveram um grande aumento na velocidade e resistência ao usar peças da PrecisionTech"</p>
                            <div className='font-bold text-2xl text-blue-950 self-start my-3'>
                                FastRacers
                            </div>
                            <div>
                                <h4 className='text-xl text-blue-950 font-bold'>Joe Siderato</h4>
                                <p className='text-sm'>Três vezes campeão em monaco, CEO da FastRacers, US</p>
                            </div>
                            <div className='mt-2'>
                                <Link to="/comentarios" className='text-blue-600 font-bold'>Mais comentarios...</Link>
                            </div>
                        </div>
                        <img src={piloto} className='animate-move h-64 w-64 sm:h-72 sm:w-72 rounded-full' alt="" />
                    </div>
                </div>
            </section>
            <section className='mb-6 py-4 lg:pt-0  lg:mb-20' data-aos="slide-up" data-aos-duration="800">
                <div className="mx-auto max-w-[1250px] px-4 flex flex-col-reverse gap-6 items-center justify-between md:flex-row">
                    <div className='flex-1'>
                        <h2 className='text-blue-950 text-2xl font-bold my-6 sm:text-3xl lg:text-4xl lg:mb-10 bg-transparent'>Um portifólio com diversos  projetos
                        </h2>
                        <p className='text-[17px] max-w-[500px] sm:text-lg lg:max-w-none lg:text-2xl'>Com um design inovador, estas válvulas de superliga de níquel foram desenvolvidas para os novos foguetes da NASA. com cortes precisos e detalhes milimétricos, atendeu aos mais elevados padrões de engenharia e performance exigidos pela agência espacial.</p>
                        <div className='mt-2'>
                            <Link to="/projetos" className='text-blue-600 font-bold'>Mais projetos...</Link>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <img className='h-60 md:h72 lg:h-80' src={valvulas} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}