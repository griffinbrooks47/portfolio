import './App.css'
import { Navbar, NavItem } from './components/navbar/navbar'
import { Profile } from './components/profile/profile'
import { Projects, Project } from './components/projects/projects'
import { projectData } from './projectData'

function App() {

  return (
    <>
      <Navbar>
        <NavItem title={"About"}/>
        <NavItem title={"Contact"}/>
      </Navbar>
      <Profile />
      <Projects>
        {projectData.map(project => ( 
          <Project 
            key={project.id}
            {...project}
          />
        ))}
      </Projects>
    </>
  )
}

export default App
