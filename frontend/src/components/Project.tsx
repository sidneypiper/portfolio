import {ProjectInterface, TechnologyInterface} from "../types.ts";
import Technology from "./Technology.tsx";
import {useRef} from "react";

interface ProjectProps {
    project: ProjectInterface
}

function Project(props: ProjectProps) {
    const project: ProjectInterface = props.project;
    const iframe = useRef<HTMLIFrameElement | null>(null)
    const scale = 0.3;

    const depthParam = 'iframeDepth';
    const maxDepth = 3;
    const currentUrl = new URL(window.location.toString());
    const currentDepth = currentUrl ? parseInt(currentUrl.searchParams.get(depthParam) ?? '0', 10) : 0;
    const iframeSrc = currentDepth < maxDepth && (() => {
        const u = new URL(currentUrl.toString());
        u.searchParams.set(depthParam, String(currentDepth + 1));
        return u.toString();
    })();

    return (
        <div
            className="rounded-2xl overflow-hidden grid grid-rows-subgrid row-span-3 transition-all bg-white mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            {
                project.title === "Portfolio" && iframeSrc && window.matchMedia('(min-width: 1024px)').matches
                    ? <iframe src={iframeSrc}
                              title="portfolio-preview"
                              ref={iframe}
                              onLoad={() => {
                                  const style = iframe?.current?.contentDocument?.body.style
                                  style?.setProperty('overflow', 'hidden');
                                  style?.setProperty('background', 'white');

                                  window.addEventListener('scroll', () => {
                                      iframe.current?.contentWindow?.scrollTo({top: scrollY});
                                  });
                              }}
                              className="pointer-events-none origin-top-left"
                              style={{
                                  width: `${100 / scale}%`,
                                  height: `${100 / scale}%`,
                                  transform: `scale(${scale})`,
                                  transformOrigin: 'top left',
                                  border: '0'
                              }}
                    />
                    : <img className="h-80 w-full object-cover"
                           src={`${import.meta.env.VITE_API_URL}/images/projects/${project.imagePath}`}
                           alt={project.imagePath}/>
            }
            <div className="px-4 py-3 flex flex-col gap-1">
                <div className="flex flex-row items-baseline gap-2">
                    <h3 className="text-[28px] font-semibold text-stone-800">{project.title}</h3>
                    <h4 className="text-xl text-stone-600">{new Date(project.released).getFullYear()}</h4>
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