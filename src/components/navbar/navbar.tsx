import './navbar.css'

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
            <a className='nav-tag'>{props.title}</a>
        </li>
    )
}