import { mix } from 'polished'
import * as React from 'react'

interface Props {
  hue: number
  active: boolean
  onClick: () => void
  children: string
}

const Tag: React.FC<Props> = ({ hue, active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="select-none whitespace-nowrap rounded-full px-2 py-1 text-sm"
      style={{
        // TODO: Investigate style prop usage for dynamic values
        backgroundColor: mix(0.5, `hsl(${hue}, 60%, 75%)`, 'white'),
        opacity: active ? 1 : 0.5,
      }}
    >
      {children}
    </button>
  )
}

export default Tag
