type ProjType = {
    name: string,
    client: string,
    description: string,
    image: string,
    date: string
}

type ProjProps = {
    proj: ProjType,
    windowWidth: number
}

export default function ProjCard({ proj, windowWidth }: ProjProps) {
    return (
        <div data-aos={windowWidth < 400 ? "fade-up" : "fade-in"} data-aos-duration="2000" className="w-full max-w-[350px] card-shadow rounded-lg lg:max-w-[400px]">
            <div>
                <img className="h-auto w-full rounded-t-lg lg:h-[360px]" src={proj.image} alt="" />
            </div>
            <div className="p-2">
                <h3 className="text-blue-950 font-bold text-lg mb-2 lg:text-xl">{proj.name}</h3>
                <div className="flex justify-between mb-2 items-baseline">
                    <h4 className="text-blue-800 font-bold">{proj.client}</h4>
                    <p className="text-blue-800 font-bold text-xs">{proj.date}</p>
                </div>
                <p className="text-xs lg:text-sm">{proj.description}</p>
            </div>
        </div>
    )
}