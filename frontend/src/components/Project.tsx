import {ProjectInterface, TechnologyInterface} from "../types.ts";
import Technology from "./Technology.tsx";

interface ProjectProps {
    project: ProjectInterface
}

function Project(props: ProjectProps) {
    const project: ProjectInterface = props.project;

    return (
        <div className="rounded-2xl overflow-hidden grid grid-rows-subgrid row-span-3 transition-all bg-white">
            <img className="h-80 w-full object-cover" src={"http://localhost:8080/images/projects/" + project.imagePath}
                 alt={project.imagePath}/>
            <div className="px-4 py-3 flex flex-col gap-1">
                <div className="flex flex-row items-baseline gap-2">
                    <h3 className="text-[28px] font-semibold text-stone-800">{project.title}</h3>
                    <h4 className="text-xl text-stone-600">{project.released}</h4>
                </div>
                <p className="text-lg text-stone-700">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 px-4 pb-2 self-start">
                {
                    project.technologies.map((technology: TechnologyInterface, index: number) => (
                            <Technology key={index} technology={technology}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Project