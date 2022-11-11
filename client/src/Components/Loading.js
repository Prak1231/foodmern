import React from 'react'

const Loading = () => {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{
          height: '200px',
          width: '200px',
          marginTop: '30%',
          marginLeft: '40%',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
