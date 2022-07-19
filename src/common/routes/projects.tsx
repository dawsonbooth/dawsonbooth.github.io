import * as React from 'react'
import { Fallback } from '../../projects'
import { Route } from './types'

const Projects = React.lazy(() => import('../../projects'))

const route: Route = {
  name: 'Projects',
  path: '/projects',
  element: (
    <React.Suspense fallback={<Fallback />}>
      <Projects />
    </React.Suspense>
  ),
}

export default route
