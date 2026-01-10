function Login(){
    return(
        <div className='bg-gray-600 flex items-center justify-center flex-col rounded-2xl p-8  max-w-2xl w-sm shadow-lg shadow-cyan-500/50'>
        <h2 className=" text-center text-3xl text-white mb-6 font-bold">Login</h2>
        <form class="w-full"> 
          <div className="mb-4 w-full">
            <label htmlFor='' className="block text-sm font-medium text-gray-300 mb-2" >Email </label>
            <input type="email" name="" placeholder='Email' id="" className="bg-gray-500 w-full px-3 py-2 mb-2 border-gray-500 rounded-md text-white"/>
          </div>
          <div className="mb-6">
            <label htmlFor='' className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input type="password" name="" placeholder='password ' id=""  className="bg-gray-500 w-full px-3 py-2 mb-2 border-gray-500 rounded-md text-white"/>
          </div>
            <button type="submit" className="w-full text-white bg-blue-600 py-3 rounded-md hover:bg-blue-400 shadow-3xl">Login</button>

        </form>
      </div>
    )
}

export default Login;