// TODO: Rename to reflect feature/page root
export enum Page {
  Home = 'HOME',
  Projects = 'PROJECTS',
}

export interface Route {
  name: string
  path: string
  element: React.ReactElement
}
