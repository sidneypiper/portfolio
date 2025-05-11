import {TechnologyInterface} from "../types.ts";

interface TechnologyProps {
    technology: TechnologyInterface
}

function Technology(props: TechnologyProps) {
    const technology: TechnologyInterface = props.technology

    return (
        <div className="px-1 py-1 flex items-center gap-1 max-w-fit">
            <img
                className="h-4"
                src={"http://localhost:8080/images/icons/" + technology.iconPath}
                alt={technology.name + " icon"}
            />
            <h4 className="text-stone-600">{technology.name}</h4>
        </div>
    )
}

export default Technology