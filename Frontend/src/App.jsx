import { useState } from 'react'
import User_authentication_component from './components/page/User_authentication.component.jsx'
import { useSelector } from 'react-redux'

function App() {
  const somedata=useSelector((state)=>state.userdata)
  return  (
    <>  
    {somedata}

    </>
  )
 
}

export default App
