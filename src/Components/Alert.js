import React from 'react'

const Alert = ({noResults}) => {
  return (
    <div>
      {noResults && <p> There is not such a user</p>}
    </div>
  )
}

export default Alert
