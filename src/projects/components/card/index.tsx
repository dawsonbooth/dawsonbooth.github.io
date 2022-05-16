import React from 'react'
import { Project } from '../../types'

interface Props {
  project: Project
}

const Card: React.FC<Props> = ({ project }) => {
  if (!project) return <div className="rounded-lg"></div>

  return (
    <a
      href={project.homepage}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-lg hover:shadow-xl hover:scale-105 transition duration-100"
    >
      <h1 className="font-bold">{project.name}</h1>
      <p>{project.description}</p>
    </a>
  )
}

export default Card
