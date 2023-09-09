import './navbar.css'
import { Link } from 'react-scroll'

export const Navbar = (props:{children:React.ReactNode}) => {
    
    return (
        <ul className='nav'>
            {props.children}
        </ul>
    )
}

export const NavItem = (props:{title: string}) => {
    return (
        <li className='nav-item'>
            <Link to="contact" smooth duration={500} className='nav-tag'>{props.title}</Link>
        </li>
    )
}