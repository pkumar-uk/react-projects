import React, { useEffect } from 'react'

const Alert = ({ alerttype } ) => {
  return (
    <div className='alert'>
      {alerttype == 'sucess' && <p className="alert-success">added item</p>}
      {alerttype == 'delete' && <p className="alert-danger">deleted item</p>}
    </div>
  )
}

export default Alert
