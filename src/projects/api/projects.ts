import request, { gql } from 'graphql-request'
import { Project } from '../types'

const document = gql`
  query {
    user(login: "dawsonbooth") {
      repositories(
        first: 10
        isFork: false
        orderBy: { field: STARGAZERS, direction: DESC }
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        nodes {
          name
          shortDescriptionHTML
          stargazerCount
          forkCount
          repositoryTopics(first: 10) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
          homepageUrl
        }
      }
    }
  }
`

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

const fetchProjects = async (): Promise<Project[]> => {
  const data = await request<RepositoriesQuery>(
    'https://api.github.com/graphql',
    document,
    undefined,
    {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
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

export default fetchProjects
