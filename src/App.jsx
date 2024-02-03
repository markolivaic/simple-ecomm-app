import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Navbar from "./Components/Navbar/Navbar"

const Main = lazy(() => import("./Pages/Main/Main"))

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path='' element={<Main />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
