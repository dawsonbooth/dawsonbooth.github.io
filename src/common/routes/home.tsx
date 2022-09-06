import * as React from 'react'
import { Fallback } from '../../home'
import { Route } from './types'

const Home = React.lazy(() => import('../../home'))

const home: Route = {
  name: 'Home',
  path: '/',
  element: (
    <React.Suspense fallback={<Fallback />}>
      <Home />
    </React.Suspense>
  ),
}

export default home
