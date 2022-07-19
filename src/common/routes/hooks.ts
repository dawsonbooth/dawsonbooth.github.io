import { useLocation } from 'react-router'
import { Page } from './types'

export const useCurrentPage = (): Page => {
  const location = useLocation()

  // TODO: Return current page

  return Page.Home
}
