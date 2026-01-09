import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline  p-3 rounded-3xl bg-green-600">
        Hello world!
      </h1>
      <p class="text-amber-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, minus praesentium sint quam debitis aut quis voluptatum temporibus odio quia amet, saepe ipsam cupiditate ea suscipit perferendis voluptatibus quos tempora.</p>
    </>
  )
}

export default App
