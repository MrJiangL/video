import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Config from './views/config'
import Navbar from './components/Navbar'
import Copyright from './components/Copyright'

import { useSelector } from 'react-redux'
import { selectCount } from './redux'

function App(): JSX.Element {
  const count = useSelector(selectCount)
  // const dispatch = useDispatch()
  return (
    <main>
      <Router>
        <span>{count}</span>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/config" element={<Config />}></Route>
        </Routes>
        <Copyright />
      </Router>
    </main>
  )
}

export default App
