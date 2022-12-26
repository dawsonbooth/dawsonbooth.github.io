import { useTheme } from '@/common/providers/theme'
import * as React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'
import Icon from '../icon'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <div className="flex min-h-screen w-screen flex-col items-stretch bg-light-background dark:bg-dark-background">
      <header className="flex justify-center p-3 shadow-md dark:bg-dark-nav">
        <nav className="flex max-w-screen-lg items-center gap-2 dark:text-dark-text font-bold">
          {Object.values(routes).map(route => (
            <Link
              to={route.path}
              key={route.name}
              className="hover:text-light-link hover:dark:text-dark-link"
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="flex justify-center  p-3 dark:bg-dark-nav">
        <nav className="flex max-w-screen-lg items-center gap-2 text-2xl dark:text-dark-text">
          <a
            href="https://www.linkedin.com/in/dawsonbooth/"
            target="_blank"
            className="hover:text-light-link hover:dark:text-dark-link"
          >
            <Icon icon="linkedin" />
          </a>
          <a
            href="https://github.com/dawsonbooth/"
            target="_blank"
            className="hover:text-light-link hover:dark:text-dark-link"
          >
            <Icon icon="linkedin" />
          </a>
          <button
            onClick={theme.cycle}
            className="flex place-content-center hover:text-light-link hover:dark:text-dark-link"
          >
            <Icon icon="palette" />
          </button>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
