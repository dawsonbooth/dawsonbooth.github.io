import HomePage from '../../../home'
import ProjectsPage from '../../../projects'

// TODO: Rename to reflect feature/page root
enum Page {
  Home = 'HOME',
  Projects = 'PROJECTS',
}

interface Route {
  name: string
  path: string
  element: React.ReactElement
}

const routes: {
  [P in Page]: Route
} = {
  [Page.Home]: { name: 'Home', path: '/', element: <HomePage /> },
  [Page.Projects]: { name: 'Projects', path: '/projects', element: <ProjectsPage /> },
}

export default routes
