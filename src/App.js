import About from "./about"
import Header from "./header/header"
import Carousel from "./components/carosel"
import { Routes,Router,Route, useNavigate } from "react-router-dom"
import Addtocart from "./components/addtocart"
import { useState } from "react"
import ProductsCard from "./components/productcard"
export default function App(){

  const [showProductCard,setShowProductCard] = useState(true);
  const Navigate = useNavigate();

  function handleClick(){
    setShowProductCard(false);
    // Navigate('/itemdetails')

  }

  
 
  return (<>
    {/* <Header />
    
    <Carousel />

         
    
    <Routes>
      <Route path="/about" element={<About />}>

      </Route>
    </Routes>
    <Routes>
      <Route path="/itemdetails" element={<Addtocart />}>

      </Route>
    </Routes> */}

      <Header />
      <Carousel />
      
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/itemdetails" element={
          showProductCard ? (<ProductsCard onClick={handleClick}/>) : (<Addtocart />)
        } /> */}
        <Route path="/itemdetails" element={<Addtocart />}></Route>
      </Routes>
  </>)
}