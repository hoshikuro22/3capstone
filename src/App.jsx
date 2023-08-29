
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/landingPage'
import AdminPage from './Pages/AdminPage'
import ErrorPage from './Pages/ErrorPage'
import Footer from './Components/Footer'
import StaffPage from './Pages/StaffPage'
import Header from './Components/Header'



function App() {
  

  return (
    <>
    <div className=''>

 
<Header />
     <Routes>
     <Route path='/' element={<LandingPage/>} />              {/* first page to see */}
     <Route path='/admin/*' element={<AdminPage/>} />     {/* activated when /admin  */}
     <Route path='/staff/*' element={<StaffPage/>} />     {/* activated when /staff  */}
     <Route path='/*' element ={<ErrorPage/>} />          {/* activate when /<random> */}
       </Routes>

  
 <Footer />

    </div>
   </>
  )
}

export default App
