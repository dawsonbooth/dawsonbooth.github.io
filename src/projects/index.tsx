import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import Layout from '../common/components/layout'
import { fetchProjects } from './api'
import Card from './components/card'

const ProjectsPage: React.FC = () => {
  const { data: projects } = useQuery('projects', fetchProjects)

  const tags = useMemo(
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
  const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>(
    tags.reduce<Record<string, boolean>>(
      (record, tag) => ({
        ...record,
        [tag]: true,
      }),
      {},
    ),
  )

  useEffect(() => {
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

  const [isFilterEnabled, setIsFilterEnabled] = useState<boolean>(false)
  const [areTagHuesRandom, setAreTagHuesRandom] = useState<boolean>(false)

  const tagHues = useMemo(
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
    <Layout>
      <div className="flex flex-col items-center p-6">
        <div className="flex flex-col items-center gap-6 max-w-screen-lg">
          <h1 className="text-3xl font-bold">Personal Projects</h1>
          <div className="flex justify-between gap-2 px-2 items-center rounded-full bg-white">
            search icon
            <input
              type="text"
              placeholder="Search for a project..."
              disabled={!projects}
              className="border-0"
            />
            <input // TODO: Label
              type="checkbox"
              defaultChecked={isFilterEnabled}
              onChange={() => setIsFilterEnabled(v => !v)}
            />
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
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => ({ ...prev, [tag]: !prev[tag] }))}
                    className="rounded-full px-2 py-1 select-none whitespace-nowrap"
                    style={{
                      // TODO: Investigate style prop usage for dynamic values
                      backgroundColor: `hsl(${tagHues[tag]}, 50%, 75%)`,
                      opacity: selectedTags[tag] ? 1 : 0.5,
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="grid md:grid-cols-2 gap-8 ">
            {projects?.map(project => (
              <Card key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
