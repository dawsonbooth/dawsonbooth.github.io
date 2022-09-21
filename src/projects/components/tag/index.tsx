import classNames from 'classnames'
import * as React from 'react'

interface Props {
  active: boolean
  onClick: () => void
  children: string
}

const Tag: React.FC<Props> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'select-none whitespace-nowrap rounded-full bg-slate-200 px-2 py-1 text-sm',
        {
          'opacity-50': !active,
        },
      )}
    >
      {children}
    </button>
  )
}

export default Tag
