import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Create from "./pages/Create";
import PostDetail from "./pages/PostDetail";
import Edit from "./pages/Edit";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
