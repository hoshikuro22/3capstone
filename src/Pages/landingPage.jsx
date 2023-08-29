import Picture from '../assets//ched10.png'
import { Route,Routes } from 'react-router-dom'
import AdminPage from './AdminPage'
function Landing() {
  return (
    <div className='bg-gray-500 h-screen'>
     
      <div className='flex flex-col items-center justify-center p-9'>
        <div className='mt-3'>
          <div className='flex flex-col md:flex-row md:gap-6 items-center text-2xl font-semibold text-white text-center'>
            <img className='h-[200px] w-[200px]' alt='ched-logo' src={Picture} />
            <span>Commission on Higher Education Region X</span>
          </div>
          <div className='mt-7 text-5xl text-white font-bold text-center'>
            <span>Records Management Information System</span>
          </div>
        </div>
      </div>

      <body className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-80 my-10 ">
        <h1 className="text-2xl font-semibold mb-4">User Login</h1>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" id="username" name="username" className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"></input>
            </div>
            <div className="mb-4">
                <label  className="block text-sm font-medium text-gray-700">Password</label>
                <input required type="password" id="password" name="password" className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"></input>
            </div>
            <button href="/admin/communication" type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
        </form>
    </div>
    </body>
    <Routes>
      
      <Route path='admin/' element={<AdminPage/>} />     {/* activated when /admin  */}
      
        </Routes>
        <div className="bottom-0 absolute">
                <a href="/admin" className="block py-1 px-2 rounded hover:bg-gray-700">(as if admin)</a>
                <a href="/staff" className="block py-1 px-2 rounded hover:bg-gray-700">(as if staff)</a>
             
            </div>
      </div>

    
  )
}

export default Landing