import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>header stuff</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
