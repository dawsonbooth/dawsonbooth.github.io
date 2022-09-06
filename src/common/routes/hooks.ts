import { matchPath, useLocation } from 'react-router'
import { Page } from './constants'
import home from './home'
import projects from './projects'

const isCurrentPage = (pageRoot: string, currentPath: string): boolean =>
  !!matchPath(`${pageRoot}/*`, currentPath)

export const useCurrentPage = (): Page | null => {
  const { pathname } = useLocation()

  if (isCurrentPage(home.path, pathname)) return Page.Home
  if (isCurrentPage(projects.path, pathname)) return Page.Projects

  return null
}
