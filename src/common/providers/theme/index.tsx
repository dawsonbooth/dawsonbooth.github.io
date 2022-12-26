import { proxyWithPersist } from '@/common/store'
import * as React from 'react'
import { useSnapshot } from 'valtio'

type Theme = 'light' | 'dark' | 'system'

const themes: Theme[] = ['light', 'dark']

const store = proxyWithPersist<{
  theme: Theme
}>({ name: 'theme', initialState: { theme: 'system' } })

const set = (theme: Theme) => {
  store.theme = theme
}

const cycle = () => set(themes[((themes.indexOf(store.theme) ?? 0) + 1) % themes.length])

export const useTheme = () => {
  const { theme } = useSnapshot(store)
  return { current: theme, set, cycle }
}

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  const isDarkModeEnabled =
    theme.current === 'dark' ||
    (theme.current === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return <div className={`contents ${isDarkModeEnabled && 'dark'}`}>{children}</div>
}

export default ThemeProvider
