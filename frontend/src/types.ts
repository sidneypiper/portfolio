interface ProjectInterface {
    title: string;
    description: string;
    imagePath: string;
    released: number;
    technologies: TechnologyInterface[];
}

interface TechnologyInterface {
    name: string;
    iconPath: string;
}

export type {ProjectInterface, TechnologyInterface};