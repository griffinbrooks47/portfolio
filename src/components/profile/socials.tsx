import { aboutIcons } from "../../assets/icons";


interface ISocial {
    icon: string
    url: string
}

const LinkedIn: ISocial = {
    icon: aboutIcons.linkedin,
    url: "https://www.linkedin.com/in/griffin-brooks-992606246/"
}

const GitHub : ISocial = {
    icon: aboutIcons.github,
    url: "https://github.com/griffinbrooks47"
}

const Instagram : ISocial = {
    icon: aboutIcons.instagram,
    url: "https://www.instagram.com/griffins.stuff/"
}

const Email : ISocial = {
    icon: aboutIcons.email,
    url: "mailto:griffinbrooks47@gmail.com"
}

export const socials = [LinkedIn, GitHub, Instagram, Email]
