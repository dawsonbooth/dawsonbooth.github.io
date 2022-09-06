import * as React from 'react'
import Markdown from 'react-markdown'
import { useQuery } from 'react-query'
import rehypeRaw from 'rehype-raw'
import { fetchAbout } from './api'

const Contents: React.FC = () => {
  const { data: about } = useQuery('about', fetchAbout)

  return (
    <div className="flex flex-col items-center p-6">
      {about && (
        <article className="prose">
          <Markdown rehypePlugins={[rehypeRaw]}>{about}</Markdown>
        </article>
      )}
    </div>
  )
}

export const Fallback: React.FC = () => <>...</>

const Home: React.FC = () => (
  <React.Suspense fallback={<Fallback />}>
    <Contents />
  </React.Suspense>
)

export default Home
