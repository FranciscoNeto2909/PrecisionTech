import Card from "../../components/card/Card"
import { services } from "../../data/services"
import { materials } from "../../data/materials"

type Props = {
    windowWidth: number
}

export default function Services({ windowWidth }: Props) {
    return (
        <div className="mt-16">
            <div className="mx-auto max-w-[1250px] py-4 px-1 lg:px-6">
                <section className="lg:mb-10">
                    <h2 className='text-blue-950 text-3xl font-bold mb-6 lg:text-4xl  bg-transparent'>Serviços
                    </h2>
                    <div className="flex flex-wrap gap-4 items-start justify-center xl:justify-start">
                        {
                            services.map((service, i) => (
                                <Card item={service} windowWidth={windowWidth} key={i} />
                            ))
                        }
                    </div>
                </section>
                <section className="lg:my-10">
                    <h2 className='text-blue-950 text-3xl font-bold my-6 lg:text-4xl bg-transparent'>Materiais</h2>
                    <div className="flex flex-wrap gap-4 items-start justify-center xl:justify-start">
                        {
                            materials.map((material, i) => (
                                <Card item={material} windowWidth={windowWidth} key={i} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}