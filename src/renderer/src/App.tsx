import Navbar from './components/Navbar'
import Action from './components/Action'
import Frame from './components/Frame'
import Buttons from './components/Buttons'
import Videos from './components/Videos'

function App(): JSX.Element {
  return (
    <main>
      <Navbar />
      <Frame />
      <Action />
      <Buttons className="mt-3" />
      <Videos />
    </main>
  )
}

export default App
