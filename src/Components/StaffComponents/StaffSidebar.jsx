
import Picture from '..//StaffComponents/ched10.png'

const StaffSidebar = () => {

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
        <li className="mb-2">
                <a href='/staff/organization' className="block py-1 px-2 rounded hover:bg-gray-700">Organization</a>
            </li>  
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
        <div className="bottom-0 absolute">
                <a href="/" className="block py-1 px-2 rounded hover:bg-gray-700">Logout (back to login)</a>
             
            </div>
    </div>
    
     
    
    
</body>

    </div>
  

  )
}

export default StaffSidebar