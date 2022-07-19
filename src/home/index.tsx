import * as React from 'react'

const Contents: React.FC = () => <h1 className="text-3xl font-bold underline">Hello world!</h1>

export const Fallback: React.FC = () => <>...</>

const Home: React.FC = () => <Contents />

export default Home
