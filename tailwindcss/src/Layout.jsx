function Layout(){
    return(
        <>
              <div className=" grid gap-4 m-4 grid-cols-2 sm:grid-cols-2 "> 
                <div className="min-h-25 rounded-lg  bg-purple-500 shadow" ></div>
                <div className="min-h-25 rounded-lg  bg-gray-500 shadow"></div>
            </div>
            <div className=" grid gap-4 m-4 sm:grid-cols-4 "> 
                <div className="min-h-25 rounded-lg  bg-orange-500 shadow" ></div>
                <div className="min-h-25 rounded-lg  bg-teal-500 shadow"></div>
                <div className="min-h-25 rounded-lg  bg-red-500 shadow"></div>
                <div className="min-h-25 rounded-lg  bg-blue-500 shadow"></div>
            </div>
            
            <div className="grid gap-4  m-4 sm:grid-cols-12 ">
                <div className="sm:col-span-2 min-h-25 rounded-lg  bg-amber-400 shadow sm:block hidden"></div>
                <div className="sm:col-span-8 min-h-25 rounded-lg  bg-green-500 shadow"></div>
                <div className="sm:col-span-2 min-h-25 rounded-lg  bg-amber-700 shadow sm:block hidden"></div>
            </div>
        </>
    )
}
export default Layout