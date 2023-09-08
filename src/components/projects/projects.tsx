import './projects.css'

export const Projects = (props: {children:React.ReactNode}) => {
    return(
        <div className='projects-container'>
            <h1 className="projects-header">
                Current Projects
            </h1>
            <ul className='projects'>
                {props.children}
            </ul>
        </div>
    )
}

type ProjectProps = {
    title:string,
    website?:string,
    url?:string,
    desc:string, 
    skills:string[],
    repo:string,
    image?:string
}

export const Project = (props:ProjectProps) => {
    return(
        <div className='project-card'>
            <h1 className='project-title'>
                {props.title}
            </h1>
            <a className='project-url' href={props.url} target='_blank'>
                {props.website}
            </a>
            <div className='project-desc'>
                {props.desc}
            </div>
            <ul>
                {props.skills.map(
                    skill => (
                        <Skill title={skill}/>
                    )
                )}
            </ul>
            <a href={props.repo} target='_blank'>
                Github Repo
            </a>

        </div>
    )
}

export const Skill = (props:{title:string}) => {
    return (
        <li className='project-skill'>
            <a>{props.title}</a>
        </li>
    )
}