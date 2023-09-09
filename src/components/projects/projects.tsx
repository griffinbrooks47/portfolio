import './projects.css'
import { projectIcons } from '../../assets/icons'

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
            <ul className='project-buttons'>
                {
                    (props.url===undefined)
                    ? <></>
                    : <ProjectButton link={props.url} icon={projectIcons.globe}>Visit</ProjectButton>
                }
                <ProjectButton link={props.repo} icon={projectIcons.github2}>
                    Github
                </ProjectButton>

            </ul>
            <div className='project-desc'>
                {props.desc}
            </div>
            <ul className='project-skills'>
                {props.skills.map(
                    skill => (
                        <Skill title={skill}/>
                    )
                )}
            </ul>
        </div>
    )
}

export const Skill = (props:{title:string}) => {
    return (
        <li className='project-skill'>
            {props.title}
        </li>
    )
}

export const ProjectButton = (props:{link:string, children:string, icon:string}) => {
    return (
        <li className='project-button'>
            <a className='project-button-tag' href={props.link} target='_blank'>
                <img src={props.icon} className='project-button-icon' />
                {props.children}
            </a>
        </li>
    )
}
