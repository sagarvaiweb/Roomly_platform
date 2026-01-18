import Navbar from "./Landing_page/CommonComponents/Navbar" ;
import Footer from "./Landing_page/CommonComponents/Footer";
import HomePage from "./Landing_page/Home/HomePage";
import { Routes , Route } from "react-router-dom";
import ShowPage from "./Landing_page/Show/ShowPage";
Route
function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/"  element={<HomePage/>}/>
     <Route path="/listings/:id" element={<ShowPage/>} />
     </Routes>
     <Footer/>
    </>
  )  
}

export default App
