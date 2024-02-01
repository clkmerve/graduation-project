import Destinations from "../Components/Destinations/Destinations"
import Home from "../Components/Home/Home"
import Footer from "../Components/Layout/Footer/Footer"
// import Navbar from "../Components/Layout/Navbar/Navbar"
import Middle from "../Components/Middle/Middle"
import Portifolio from "../Components/Portifolio/Portifolio"
import Questions from "../Components/Questions/Questions"
import Reviews from "../Components/Reviews/Reviews"
import Subscribe from "../Components/Subscribe/Subscrice"


const Anasayfa = () => {
  return (
    <>
    {/* <Navbar/> */}
   <Home />
   <Middle/>
   <Destinations/>
   <Portifolio/>
   <Reviews/>
   <Questions/>
   <Subscribe/>
   <Footer/>

    </>
  )
}

export default Anasayfa
