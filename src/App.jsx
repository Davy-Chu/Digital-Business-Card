import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
