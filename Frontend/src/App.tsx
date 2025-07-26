import { type JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import BmrCalc from './Pages/BmrCalc'
import DashboardLayout from './layouts/DashboardLayout'
// import MealPlan from './Pages/Meal-Plans'
// import SavedPlans from './Pages/Saved-Plans'
import NotFound from './Pages/NotFound'
import ActivityLevels from './Pages/ActivityLevels'
import Goal from './Pages/Goal'
import MacroPage from './Pages/MacroPage'
import FoodPreference from './Pages/FoodPreference'
import LandingPage from './Pages/landingPage'


function App(): JSX.Element {
  return (
    <>
    <Routes>
      <Route path='/' element ={<LandingPage/>} />
      <Route element ={ <DashboardLayout />} >
        <Route path='/BmrCalc' element={< BmrCalc/>} />
        <Route path='/activityLevel' element={<ActivityLevels/> }/>
        <Route path='/goal' element={<Goal />} />
        <Route path='/MacroPage' element={<MacroPage/>} />
        <Route path= '/preference' element= {<FoodPreference/>} />
        {/* <Route path='/meal-plans' element= {<MealPlan />} />
        <Route path='/saved' element ={<SavedPlans />} /> */}
        <Route path='*' element= {<NotFound />} />
      </Route>
    </Routes>    
    </>
  )
}

export default App