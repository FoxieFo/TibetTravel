import './App.css'
import BestOffer from './components/BestOffer/BestOffer'
import Explore from './components/Explore/Explore'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'
import StartMenu from './components/StartMenu/StartMenu'

function App() {

  return (
    <>
      <StartMenu />
      <Explore />
      <BestOffer />
      <PopularDestinations />
      {/* < Footer /> */}
    </>
  )
}

export default App
