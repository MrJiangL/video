import Frame from '../components/Frame'
import Action from '../components/Action'
import Buttons from '../components/Buttons'
import Videos from '../components/Videos'
import Copyright from '../components/Copyright'

function Home(): JSX.Element {
  return (
    <main>
      <Frame />
      <Action />
      <Buttons className="mt-3" />
      <Videos />
    </main>
  )
}

export default Home
