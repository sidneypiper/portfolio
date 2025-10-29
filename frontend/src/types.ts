interface ProjectInterface {
    title: string;
    description: string;
    imagePath: string;
    released: Date;
    technologies: TechnologyInterface[];
}

interface TechnologyInterface {
    name: string;
    iconPath: string;
}

export type {ProjectInterface, TechnologyInterface};