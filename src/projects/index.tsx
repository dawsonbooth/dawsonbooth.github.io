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
  const [areTagHuesRandom, setAreTagHuesRandom] = React.useState<boolean>(false)

  const tagHues = React.useMemo(
    () =>
      tags.reduce<Record<string, number>>((record, tag, index) => {
        const hue = areTagHuesRandom
          ? Math.round(Math.random() * 255)
          : Math.round((index / (tags.length - 1)) * 255)

        return {
          ...record,
          [tag]: hue,
        }
      }, {}),
    [areTagHuesRandom, tags],
  )

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center gap-6 max-w-screen-lg">
        <h1 className="text-3xl font-bold">Personal Projects</h1>
        <div className="flex justify-between gap-2 px-2 items-center bg-white rounded-xl">
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
            <div className="self-start flex items-center">
              <h2 className="text-2xl font-bold">Filter by tag</h2>
              <input // TODO: Label
                type="checkbox"
                defaultChecked={areTagHuesRandom}
                onChange={() => setAreTagHuesRandom(v => !v)}
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map(tag => (
                <Tag
                  key={tag}
                  hue={tagHues[tag]}
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
