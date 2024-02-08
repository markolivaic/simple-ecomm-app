import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer'

const Main = lazy(() => import("./Pages/Main/Main"))
const Register = lazy(() => import("./Pages/Register/Register"))
const Login = lazy(() => import("./Pages/Login/Login"))

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/account/register' element={<Register />} />
          <Route path='/account/login' element={<Login />} />
          <Route path='/account/login' element={<Main />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
