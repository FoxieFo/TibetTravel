import './App.css'
import BestOffer from './components/BestOffer/BestOffer'
import Blog from './components/Blog/Blog'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'
import Impressions from './components/Impressions/Impressions'
import Newsletter from './components/Newsletter/Newsletter'
import Policy from './components/Policy/Policy'
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
      <Newsletter />
      <Footer />
      <Policy />
    </>
  )
}

export default App
