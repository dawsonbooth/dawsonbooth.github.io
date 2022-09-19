import * as React from 'react'
import proxyWithPersist from 'valtio-persist'
import { persistence } from '../../store'

const store = proxyWithPersist<{ theme: 'light' | 'dark' | 'system' }>({
  name: 'theme',
  initialState: {
    theme: 'system',
  },
  ...persistence,
})

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const isDarkModeEnabled =
    store.theme === 'dark' ||
    (store.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return <div className={`contents ${isDarkModeEnabled && 'dark'}`}>{children}</div>
}

export default ThemeProvider
