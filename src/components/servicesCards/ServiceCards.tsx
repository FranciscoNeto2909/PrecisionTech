
type Service = {
    name: string,
    description: string,
    image: string
}
type ServiceProps = {
    service: Service,
    key: number,
    windowWidth: number
}

export default function ServiceCards({ service, key, windowWidth }: ServiceProps) {
    return (
        <div data-aos={windowWidth < 400 ? "fade-up" : "fade-in"} data-aos-duration="2000" className="bg-white sm:h-72 py-4 pe-2 flex flex-col gap-4 card-shadow rounded-md sm:max-w-[47%] md:max-w-[370px] lg:max-w-[390px]" key={key}>
            <div className="bg-white flex-1 flex gap-1 justify-between">
                <div className="bg-blue-600 text-white h-8 w-36 p-2 rounded-e-lg card-shadow text-xs md:w-40 md:text-sm">
                    {service.name}
                </div>
                <div className="bg-white">
                    <img src={service.image} className="h-36 w-44 max-[425px]:h-40 max-[425px]:w-52 rounded-lg md:h-44 md:w-52" alt="" />
                </div>
            </div>
            <div className="flex-1 bg-white">
                <p className="bg-white text-xs ps-2">{service.description}</p>
            </div>
        </div>
    )
}