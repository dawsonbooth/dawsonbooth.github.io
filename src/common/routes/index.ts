import home from './home'
import projects from './projects'
import { Page, Route } from './types'

const routes: {
  [P in Page]: Route
} = {
  [Page.Home]: home,
  [Page.Projects]: projects,
}

export default routes
