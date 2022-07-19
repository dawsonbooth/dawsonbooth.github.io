import * as React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col items-stretch min-h-screen w-screen bg-slate-100">
    <header className="flex justify-center shadow-md bg-white">
      <div className="flex gap-2 p-2 max-w-screen-lg">
        {Object.values(routes).map(route => (
          <Link to={route.path} key={route.name} className="p-2 rounded-md active:bg-slate-100">
            {route.name}
          </Link>
        ))}
      </div>
    </header>
    <main className="flex-1">{children}</main>
  </div>
)

export default Layout
