import request from 'graphql-request'
import { Project } from '../types'
import { repositories } from './queries'

interface RepositoriesQuery {
  user: {
    repositories: {
      nodes: {
        name: string
        shortDescriptionHTML: string
        stargazerCount: number
        forkCount: number
        homepageUrl: string
        repositoryTopics: {
          edges: {
            node: {
              topic: {
                name: string
              }
            }
          }[]
        }
      }[]
    }
  }
}

export const fetchProjects = async (): Promise<Project[]> => {
  const data = await request<RepositoriesQuery>(
    'https://api.github.com/graphql',
    repositories,
    undefined,
    {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  )

  return data.user.repositories.nodes.map(repo => ({
    name: repo.name,
    description: repo.shortDescriptionHTML,
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    homepage: repo.homepageUrl,
    tags: repo.repositoryTopics.edges.map(edge => edge.node.topic.name),
  }))
}
