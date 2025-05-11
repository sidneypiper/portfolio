import Project from "./components/Project.tsx";
import {useEffect, useState} from "react";
import {ProjectInterface} from "./types.ts";
import {Typewriter} from 'react-simple-typewriter'
import {ArrowDown} from 'lucide-react';


function App() {
    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    useEffect((): void => {
        async function fetchData(): Promise<void> {
            const response: Response = await fetch('/api/projects')
            const data: ProjectInterface[] = await response.json()
            setProjects(data)
        }

        void fetchData()
    }, []);

    function scrollToProjects(): void {
        document?.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="bg-background">
            <section className="min-h-dvh flex flex-col justify-center items-center text-pretty">
                <div className="w-1/3 text prose-xl">
                    <p className="font-bold text-4xl mb-0">Hi, I'm Sidney 👋</p>
                    <p>I am a master's student in Computer Science at the University of Cologne and a{' '}
                        <span className="font-semibold">
                          <Typewriter
                              words={['Web Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']}
                              loop={0}
                              cursor
                              typeSpeed={70}
                              deleteSpeed={50}
                              delaySpeed={1500}
                          />
                        </span>
                    </p>
                </div>
                <button
                    onClick={scrollToProjects}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2"
                    aria-label="Scroll to projects"
                >
                    <ArrowDown className="h-18 w-16 animate-bounce-md cursor-pointer"/>
                </button>
            </section>
            <section id="projects" className="max-w-5xl mx-auto pb-24 scroll-mt-24">
                <h2 className="text-6xl font-bold mb-24">Projects.</h2>
                <div className="grid lg:grid-cols-2 gap-x-20 space-y-20">
                    {
                        projects.map((project: ProjectInterface, index: number) => (
                            <Project key={index} project={project}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default App
