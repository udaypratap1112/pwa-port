import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import Container from './pages/Container.jsx'


function App() {
 

  return (
    <>
     <Container/>
      <PWABadge />
    </>
  )
}

export default App
