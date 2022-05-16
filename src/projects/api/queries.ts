import { gql } from 'graphql-request'

export const repositories = gql`
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
