import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routesConfig'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const AppRouter = () => {
  return (
    <>
     <Navbar/>

      <Routes>
        {routes.map(({ path, component: Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>

     <Footer/> 
    </>
  )
}

export default AppRouter
