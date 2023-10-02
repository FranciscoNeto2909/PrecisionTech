import ServiceCards from "../../components/card/Card"
import { services } from "../../data/services"

type Props = {
    windowWidth: number
}
export default function Projects({ windowWidth }: Props) {
    return (
        <div className="mt-16">
            <div className="mx-auto max-w-[1250px] py-4 px-1 lg:px-6">
                <div className="flex flex-wrap gap-4 items-start justify-center xl:justify-start">
                    {
                        services.map((service, i) => (
                            <ServiceCards service={service} windowWidth={windowWidth} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}