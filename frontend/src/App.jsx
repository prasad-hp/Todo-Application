import React from "react"

function App() {

  return (
    <>
      <h1 className='text-blue-700 text-7xl font-sans font-semibold flex justify-center'>To-Do</h1>
      <form className="flex flex-col items-center gap-4">
        <input type="text" placeholder="Title" className="border-2 rounded-md lg:w-3/12 h-10 w-10/12 md:w-1/2"/>
        <input type="text" placeholder="Description" className="border-2 lg:w-3/12 rounded-md h-10 w-10/12 md:w-1/2"/>
        <button type="submit" className="border-3 bg-slate-600 rounded-lg p-3 text-white w-32">Submit</button>
      </form>
    </>
  )
}

export default App
