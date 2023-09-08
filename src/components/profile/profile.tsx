import './profile.css'
import { socials } from './socials'
import { icons } from '../../assets/icons'

export const Profile = () => {
    return (
        <>
            <div className='profile-container'>
                <div className='profile-header'>
                    <h1 className='profile-title'>
                        {"Hi, my name is Griffin!"}
                    </h1>
                    <ButtonsNav>
                        {socials.map(social => (
                            <ButtonsNavItem 
                                icon={social.icon}
                                url={social.url}
                            />
                        ))}
                    </ButtonsNav>
                    <div className='profile-blurb'>
                        A passionate computer science student studying at Rice University in Houston, Texas! 
                    </div>
                </div>
                <div className='profile-picture'>
                    <img className='profile-picture-png' src={icons.griffin}/>
                </div>
            </div>
            
        </>
    )
}

export const ButtonsNav = (props:{children:React.ReactNode}) => {

    return (
        <>
            <ul className='buttons-nav'>
                <hr className='buttons-nav-line'></hr>
                {props.children}
                <hr className='buttons-nav-line'></hr>
            </ul>
        </>
    )
}
export const ButtonsNavItem = (props:{icon: string, url: string}) => {
    return (
        <li className='buttons-nav-item'>
            <a className='buttons-nav-tag' href={props.url} target='_blank'>
                <img src={props.icon} className='buttons-nav-icon'/>
            </a>
        </li>
    )
}