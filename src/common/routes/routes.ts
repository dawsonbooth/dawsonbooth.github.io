import { Page } from './constants'
import home from './home'
import projects from './projects'
import { Route } from './types'

const routes: {
  [P in Page]: Route
} = {
  [Page.Home]: home,
  [Page.Projects]: projects,
}

export default routes
