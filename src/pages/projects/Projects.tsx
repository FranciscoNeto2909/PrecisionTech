import ProjCard from "../../components/projCard/ProjCard";
import { projects } from "../../data/projects";

type Props = {
    windowWidth: number
}

export default function Projects({ windowWidth }: Props) {
    return (
        <div className="mt-20">
            <div className="mx-auto max-w-[1250px] py-4 px-1 lg:px-6">
                <div className="flex flex-wrap gap-4 justify-center lg:gap-8">
                    {
                        projects.map((proj, i) => (
                            <ProjCard proj={proj} windowWidth={windowWidth} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}