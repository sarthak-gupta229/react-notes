import { useState,useCallback,useEffect,useRef } from 'react'
import passwordVideo from "./assets/password.mp4";
import passwordVideo3 from "./assets/bg3.mp4"


import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [symbolAllowed,setSymbolAllowed]= useState(false)
  const [charAllowed, setCharAlowed]= useState(false)
  const [password,setPassword]=useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let  pass = ""
    let str = 
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    
    if (numberAllowed) str += "0123456789"
    if (symbolAllowed) str += "!@#$%^&*()_+"
    for (let i=1; i<length; i++){
     const char =Math.floor(Math.random() * str.length +1)
     pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,symbolAllowed])
   useEffect(() =>{
    generatePassword()
   }, [length,numberAllowed,charAllowed,symbolAllowed])

   const copyPassword = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
   }


  return (
    <div className='relative w-screen h-dvh overflow-hidden flex justify-center items-center'>
      <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
      
      >
         <source src={passwordVideo3} type="video/mp4" />
      </video>


    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-black text-gray-500 z-10' >
      <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'  className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Passowrd'
         readOnly 
         value={password} 
         ref={passwordRef}/>
       
        <button className='text-white bg-blue-600 p-3 active:bg-blue-500' onClick={copyPassword}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 text-red-500'>
        <div>
          <input
          type='range'
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=""
          id=""
          />
          <label htmlFor="length"> Length:{length}</label>
        </div>
        <div>
          <input
          type='checkbox'
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }}
          name=""
          id=""
          />
          <label htmlFor='charInput'>Numbers</label>
        </div>
        <div>
          <input
          type='checkbox'
          onChange={() =>{
            setCharAlowed((prev) => !prev)
          }}
          name=""
          id=""
          />
          <label htmlFor='charInput'>Charcater</label>
        </div>
        <div>
          <input
          type='checkbox'
          onChange={() =>{
            setSymbolAllowed((prev) => !prev)
          }}
          name=""
          id=""
          />
          <label htmlFor='symbolInput'>Symbols</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
