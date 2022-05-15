import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../common/components/layout'
import { fetchProjects } from './api'

const ProjectsPage: React.FC = () => {
  const { data, status } = useQuery('projects', fetchProjects)
  return (
    <Layout>
      <h1>Projects</h1>
      {status}
      {data && data.map(project => JSON.stringify(project))}
    </Layout>
  )
}

export default ProjectsPage
