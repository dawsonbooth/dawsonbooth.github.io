import * as React from 'react'
import { Link } from 'react-router-dom'
import routes, { useCurrentPage } from '../../routes'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const currentPage = useCurrentPage()

  return (
    <div className="flex min-h-screen w-screen flex-col items-stretch bg-slate-100">
      <header className="flex justify-center bg-white shadow-md">
        <div className="flex max-w-screen-lg gap-2 p-2">
          {Object.entries(routes).map(([page, route]) => (
            <Link
              to={route.path}
              key={route.name}
              className={`rounded-md p-2 active:bg-slate-100 ${
                page === currentPage && 'bg-slate-100'
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
