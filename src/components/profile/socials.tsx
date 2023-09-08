import { icons } from "../../assets/icons";


interface ISocial {
    icon: string
    url: string
}

const LinkedIn: ISocial = {
    icon: icons.linkedin,
    url: "https://www.linkedin.com/in/griffin-brooks-992606246/"
}

const GitHub : ISocial = {
    icon: icons.github,
    url: "https://github.com/griffinbrooks47"
}

const Instagram : ISocial = {
    icon: icons.instagram,
    url: "https://www.instagram.com/griffins.stuff/"
}

const Email : ISocial = {
    icon: icons.email,
    url: "mailto:griffinbrooks47@gmail.com"
}

export const socials = [LinkedIn, GitHub, Instagram, Email]
