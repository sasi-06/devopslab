import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <input type="text" placeholder='Enter the name'>Username</input>
       <input type='email' placeholder='Enter the email eg.swes@gmail.com'></input>
       <input type='password' placeholder='Enter the password'>Password</input>
       <input type='password' placeholder='Reenter the password'>Confrim password</input>
      </div>

      
    
  )
}

export default App
