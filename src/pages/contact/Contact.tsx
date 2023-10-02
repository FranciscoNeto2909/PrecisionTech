export default function Contact() {
    return (
        <section className="bg-zinc-200 mt-[60px]">
            <div className="mx-auto bg-zinc-200 max-w-[1250px] py-4 px-1 lg:px-6">
                <form action="" className="bg-zinc-200 p-2 flex items-center flex-col gap-2 md:items-start">
                    <div className="w-full max-w-[400px]">
                        <input className="bg-white p-2 w-full" type="text" placeholder="Enter your Name" />
                    </div>
                    <div className="w-full max-w-[400px]">
                        <input className="bg-white p-2 w-full" type="email" placeholder="Enter your Email" />
                    </div>
                    <div className="w-full max-w-[400px] bg-white">
                        <textarea className="bg-white min-h-[96px] max-h-24 p-2 w-full" placeholder="Enter your message" />
                    </div>
                    <button className="mx-2 mt-3 rounded-full bg-blue-600 p-1 px-4 text-white max-[426px]:self-start">Enviar</button>
                </form>
            </div>
            <div className="w-full bg-blue-500">
                <div className="relative bg-blue-500 flex flex-col items-center mx-auto max-w-[1250px] py-4 px-1 md:items-start lg:px-6">
                    <h2 className='ms-4 text-white text-4xl font-bold mb-6 lg:text-5xl bg-transparent lg:ms-0'>Entrar em contato</h2>
                    <p className="ms-4 bg-blue-500 text-white max-w-[300px] lg:ms-0">Ei!, Estamos ansiosos para iniciar um projeto com você!</p>
                    <p className="ms-4 mb-4 bg-blue-500 text-white max-w-[300px] text-xs mt-2 md:text-sm lg:ms-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, consectetur in dolor quibusdam eligendi voluptatum</p>
                    <div className="flex flex-col gap-4 card-shadow rounded-lg py-4 px-8 w-60 md:absolute md:top-[-46px] md:end-4">
                        <div>
                            <p className="uppercase font-bold text-black">ligue para nos</p>
                            <ul className="text-sm">
                                <li>9999 9999 9999</li>
                                <li>(99) 999999999</li>
                            </ul>
                        </div>
                        <div>
                            <p className="uppercase font-bold text-black">localização</p>
                            <ul className="text-sm">
                                <li>123 lorem ipsum, 12 lorem</li>
                                <li>Brasil, CE 99999-9999</li>
                            </ul>
                        </div>
                        <div>
                            <p className="uppercase font-bold text-black">horário comercial</p>
                            <ul className="text-sm">
                                <li>Seg - Sex .... 7h - 17h</li>
                                <li>Sáb ............. 7h - 12h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}