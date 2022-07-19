import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: Infinity,
    },
  },
})

interface Props {
  children: React.ReactNode
}

const Client: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom-right" />
    {children}
  </QueryClientProvider>
)

export default Client
