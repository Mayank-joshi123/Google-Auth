import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageError() {
    const navigate = useNavigate()

  return (<>
    <div>404 Page Not Found</div>
    <button onClick={()=>{
        navigate('/login')
    }}> Login</button>
    </>
  )
}

export default PageError