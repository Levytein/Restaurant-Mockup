import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar'
import HomePage from './components/Home/Home'
import Menu from './components/MenuPage/Menu'

function App() {


  return (
    <>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
