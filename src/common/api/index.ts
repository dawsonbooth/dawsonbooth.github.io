import { request } from 'graphql-request'

export const requestGitHub = async <T>(document: string) =>
  await request<T>('https://api.github.com/graphql', document, undefined, {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  })
