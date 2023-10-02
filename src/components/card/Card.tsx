
type Item = {
    name: string,
    description: string,
    image: string
}
type ItemProps = {
    item: Item,
    windowWidth: number
}

export default function Card({ item, windowWidth }: ItemProps) {
    return (
        <div data-aos={windowWidth < 400 ? "fade-up" : "fade-in"} data-aos-duration="2000" className="bg-white sm:h-72 py-4 pe-2 flex flex-col gap-4 card-shadow rounded-md sm:max-w-[47%] md:max-w-[370px] lg:max-w-[390px]">
            <div className="bg-white flex-1 flex gap-1 justify-between">
                <div className="whitespace-nowrap bg-blue-600 text-white h-8 p-2 rounded-e-lg card-shadow text-xs md:text-sm">
                    {item.name}
                </div>
                <div className="bg-white">
                    <img src={item.image} className="h-36 w-44 max-[425px]:h-40 max-[425px]:w-52 rounded-lg md:h-44 md:w-52" alt="" />
                </div>
            </div>
            <div className="flex-1 bg-white">
                <p className="bg-white text-xs ps-2">{item.description}</p>
            </div>
        </div>
    )
}