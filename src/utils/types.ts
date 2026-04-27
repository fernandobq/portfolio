export type LinkAttributes = {
    sectionId: string
    name: string
    id: number
}

export type SocialMediaAttributes = {
    link: string
    name: string
    id: number
}

export type TechnologyAttributes = {
    name: string
    icon: string
    yearsOfExperience: number
    description: string
    cat: string
    since: number
    blurb: string
}

export type ProjectAttributes = {
    id: number
    name: string
    client: string
    year: string
    tags: string[]
    image: string
    link: string
    description: string
    work: string
    kind: string
}
