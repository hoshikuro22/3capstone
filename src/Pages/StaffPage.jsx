import {Routes, Route} from 'react-router-dom'
import Organization from "../Displays/Organization"
import Communication from "../Displays/Communication"
import ListOfPersonnel from '../Displays/ListOfPersonnel'
import Reports from "../Displays/Reports"

import StaffSidebar from '../Components/StaffComponents/StaffSidebar'



const StaffPage = () => {
  return (
    <div>


   
<div className='flex h-screen gap-4'>
   {/* call sidebar when /admin  only */}
   <StaffSidebar />
    
<Routes >
 
  <Route path='/organization' element={<Organization/>} />
  <Route path='/communication' element={<Communication/>} />
  <Route path='/listofpersonnel' element={<ListOfPersonnel/>} />
  <Route path='/reports' element={<Reports/>} />
 

</Routes>

</div>
    </div>
  )
}

export default StaffPage