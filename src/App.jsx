import './App.css'
import BestOffer from './components/BestOffer/BestOffer'
import Blog from './components/Blog/Blog'
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
      <Blog />
      {/* < Footer /> */}
    </>
  )
}

export default App
