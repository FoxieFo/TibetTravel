import './App.css'
import BestOffer from './components/BestOffer/BestOffer'
import Blog from './components/Blog/Blog'
import Explore from './components/Explore/Explore'
import Impressions from './components/Impressions/Impressions'
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
      <Impressions />
      {/* < Footer /> */}
    </>
  )
}

export default App
