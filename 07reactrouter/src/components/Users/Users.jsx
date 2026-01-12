import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid} = useParams()
  return (
    <div className='text-center text-3xl bg-orange-700 py-4 text-white'>User:{userid}</div>
  )
}

export default Users