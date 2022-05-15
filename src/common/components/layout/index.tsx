import React from 'react'
import { useNavigate } from 'react-router'
import routes from '../../providers/router/routes'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-stretch min-h-screen w-screen">
      <header className="flex place-content-center gap-2 p-2 bg-slate-500">
        {Object.values(routes).map(route => (
          <button
            key={route.name}
            onClick={() => navigate(route.path)}
            className="p-2 rounded-md active:bg-slate-400"
          >
            {route.name}
          </button>
        ))}
      </header>
      <main className="flex-1 bg-slate-600">{children}</main>
    </div>
  )
}

export default Layout
