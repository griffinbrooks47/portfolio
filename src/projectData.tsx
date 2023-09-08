
interface IProject {
    id:number
    title: string
    website: string
    url: string
    desc: string
    skills: string[]
    repo: string
    image?: string
}

const project1 : IProject = {
    id:1,
    title: 'Song Sorting Hat',
    website:'songsortinghat.com',
    url: 'http://songsortinghat.com',
    desc: 'The project I\'m currently working on! SongSortingHat is a website that helps music enthusiasts rank their favorite songs from their favorite artists! Build with ReactJS using TypeScript, this website takes in an artist, pulls artist metadata from Spotify\'s API, and finally, asks the user a series of questions about their preference between two songs. Each choice is fed to a ranking algorithm that outputs a top 10 list of the users favorite songs by their selected artist!',
    skills: ['TypeScript','ReactJS', 'ExpressJS', 'HTML', 'CSS'],
    repo: 'https://github.com/griffinbrooks47/songsortinghat'
}

const project2 : IProject = {
    id:2,
    title: 'Portfolio',
    website:'griffinbrooks.com',
    url: 'http://griffinbrooks.com',
    desc: 'The website you\'re looking at! I finally got around to rebuilding this website with ReactJS and TypeScript, following a brief period of static HTML and CSS. In fact, this project was my way of learning TypeScript!',
    skills: ['TypeScript','ReactJS', 'HTML', 'CSS'],
    repo: 'https://github.com/griffinbrooks47/portfolio'
}

export const projectData = [project1, project2]