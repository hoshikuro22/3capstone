import { useState } from "react"
import Picture from '..//StaffComponents/ched10.png'

const StaffSidebar = () => {
  const [isOpen, setIsOpen] = useState(false )
  return (


    <div> 

<body className="duration-500 bg-teal-700 h-screen w-36 sm:w-72 ">
    
    <div className="duration-500 bg-teal-700 text-white w-36 sm:w-72 py-4 px-6">
      <div className="flex gap-5">
 <img className="duration-500 h-16 pl-6 sm:pl-3" src={Picture}></img>
        <h1 className="duration-500 font-bold sm:text-1xl text-white top-7 items-center hidden sm:flex">CHED Region 10</h1>
      </div>
      <h1 className="text-center text-1xl mt-2">Staff Name</h1>
        <ul className="mt-5">
            <li onClick={() => setIsOpen((prev) => !prev)} className="mb-2">
                <a className="block py-1 px-2 rounded hover:bg-gray-700">Organization</a>
            </li>  {isOpen && (
             
            
            <ul className="">
                <li  className="block py-1 px-2 rounded hover:bg-gray-700">
                <a  href='/staff/organization' onClick={() => setIsOpen((prev) => !prev)} >
                  Org:Institution</a></li>
                <li className="block py-1 px-2 mb-4 rounded hover:bg-gray-700">
                <a href='/staff/organization' onClick={() => setIsOpen((prev) => !prev)} >
                  Org:Agency</a></li>
              </ul>
           
              
              )}
            <li className="mb-2 mt-2">
                <a href="/staff/communication" className="block py-1 px-2 rounded hover:bg-gray-700">Communication</a>
            </li>
            <li className="mb-2">
                <a href="/staff/listofpersonnel" className="block py-1 px-2 rounded hover:bg-gray-700">List of Personnel</a>
            </li>
            <li className="mb-2">
                <a href="/staff/reports" className="block py-1 px-2 rounded hover:bg-gray-700">Reports</a>
            </li>
        </ul>
        
    </div>
    
      {/* <div className="w-3/4 p-8 ">
          <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
          <p>This is the main content area.</p>
      </div> */}
    
    
</body>

    </div>
  

  )
}

export default StaffSidebar