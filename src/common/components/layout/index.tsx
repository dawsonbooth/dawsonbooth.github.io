import React from 'react'
import { useNavigate } from 'react-router'
import routes from '../../providers/router/routes'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-stretch min-h-screen w-screen bg-slate-400">
      <header className="flex justify-center shadow-md bg-white">
        <div className="flex gap-2 p-2 max-w-screen-lg">
          {Object.values(routes).map(route => (
            <button
              key={route.name}
              onClick={() => navigate(route.path)}
              className="p-2 rounded-md active:bg-slate-100"
            >
              {route.name}
            </button>
          ))}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
