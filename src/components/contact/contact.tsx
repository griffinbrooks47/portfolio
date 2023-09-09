import { aboutIcons } from "../../assets/icons"
import './contact.css'

export const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <hr className="contact-divider"></hr>
            <h1 className="contact-header">Get In Contact</h1>
            <ContactList>
                <ContactListItem title={"griffinbrooks47@gmail.com"} icon={aboutIcons.email} url="mailto:griffinbrooks47"/>
                <ContactListItem title={"LinkedIn"} icon={aboutIcons.linkedin} url="https://www.linkedin.com/in/griffin-brooks-992606246/"/>
                <ContactListItem title={"GitHub"} icon={aboutIcons.github} url="https://www.github.com/griffinbrooks47"/>
                <ContactListItem title={"Instagram"} icon={aboutIcons.instagram} url="https://www.instagram.com/griffins.stuff"/>
            </ContactList>
        </div>
    )
}

export const ContactList = (props:{children:React.ReactNode}) => {
    return (
        <ul className="contact-list">
            {props.children}
        </ul>
    )
}

export const ContactListItem = (props:{icon:string, title:string, url:string}) => {
    return (
        <li className="contact-item">
            <a href={props.url} className="contact-item-tag" target="_blank">
                <img src={props.icon} className="contact-item-icon"/>
                {props.title}
            </a>
        </li>
    )
}