import { useEffect, useState } from 'react'
import './App.scss'
import WebLayout from './Components/WebLayout'
import Blogs from './components/Pages/Blogs'
import BlogFullPreview from './components/Pages/BlogFullPreview'
import UserSignUp from './components/Pages/UserSignUp'
import UserLogin from './components/Pages/UserLogin'
import UserAdminPanel from './components/Pages/UserAdminPanel'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/Context/Authinicetion'
import Privaterouter from './components/Routers/privaterouter'
function App() {

  return (   
<AuthProvider>
  
  <WebLayout> 
     <Routes>
          <Route path='/signup' element={<UserSignUp/> }></Route>
          <Route path='/login' element={<UserLogin/>}></Route>
          <Route name="blog" path='/' element={<Privaterouter><Blogs/></Privaterouter>}></Route>
          <Route path='/post/:id' element={<Privaterouter><BlogFullPreview/></Privaterouter>}></Route>
          <Route  path='/profile' element={<Privaterouter><UserAdminPanel/></Privaterouter>}/>
     </Routes> 
     </WebLayout>
</AuthProvider>
  )
} 

export default App 
 