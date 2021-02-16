import React from 'react'

const mainStyles: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  width: '100%',
  height: '100%',
}

const Main: React.FC<{}> = props => {
  return (
    <div style={mainStyles}>
      <div style={mainStyles}>{props.children}</div>
    </div>
  )
}

export default Main
