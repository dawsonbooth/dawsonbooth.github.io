import { FilterIcon, SearchIcon } from '@heroicons/react/outline'
import * as React from 'react'
import { useQuery } from 'react-query'
import { fetchProjects } from './api'
import Card from './components/card'
import Tag from './components/tag'

const Contents: React.FC = () => {
  const { data: projects } = useQuery('projects', fetchProjects)

  const tags = React.useMemo(
    () =>
      projects
        ? Array.from(
            projects.reduce((tagSet, project) => {
              project.tags.forEach(tagSet.add, tagSet)
              return tagSet
            }, new Set<string>()),
          ).sort()
        : [],
    [projects],
  )

  // TODO: Fix default value -- consider using valtio
  const [selectedTags, setSelectedTags] = React.useState<Record<string, boolean>>(
    tags.reduce<Record<string, boolean>>(
      (record, tag) => ({
        ...record,
        [tag]: true,
      }),
      {},
    ),
  )

  React.useEffect(() => {
    setSelectedTags(
      tags.reduce<Record<string, boolean>>(
        (record, tag) => ({
          ...record,
          [tag]: true,
        }),
        {},
      ),
    )
  }, [tags])

  const [isFilterEnabled, setIsFilterEnabled] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex max-w-screen-lg flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Personal Projects</h1>
        <div className="flex items-center justify-between gap-2 rounded-xl bg-white px-2">
          <button className="p-2">
            {/* TODO: Focus search box */}
            <SearchIcon className="h-5 w-5 text-slate-500" />
          </button>
          <input
            type="text"
            placeholder="Search for a project..."
            disabled={!projects}
            className="border-0"
          />
          <button onClick={() => setIsFilterEnabled(v => !v)} className="p-2">
            {/* TODO: Extract icon wrapper */}
            <FilterIcon className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        {isFilterEnabled && (
          <>
            <h2 className="self-start text-2xl font-bold">Filter by tag</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map(tag => (
                <Tag
                  key={tag}
                  active={selectedTags[tag]}
                  onClick={() => setSelectedTags(prev => ({ ...prev, [tag]: !prev[tag] }))}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col items-stretch gap-8 md:grid md:grid-cols-2">
          {projects?.map(project => (
            <Card key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Fallback: React.FC = () => <>...</>

const Projects: React.FC = () => (
  <React.Suspense fallback={<Fallback />}>
    <Contents />
  </React.Suspense>
)

export default Projects
