import * as React from 'react'
import { Project } from '../../types'

interface Props {
  project: Project
}

const Card: React.FC<Props> = ({ project }) => {
  // TODO: Skeleton
  if (!project) return <div className="rounded-lg"></div>

  return (
    <a
      href={project.homepage}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-lg transition duration-100 hover:scale-105 hover:shadow-xl"
    >
      <h1 className="font-bold">{project.name}</h1>
      <p>{project.description}</p>
    </a>
  )
}

export default Card
