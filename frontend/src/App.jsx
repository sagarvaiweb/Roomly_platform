import Navbar from "./Landing_page/CommonComponents/Navbar" ;
import Footer from "./Landing_page/CommonComponents/Footer";
import HomePage from "./Landing_page/Home/HomePage";
import { Routes , Route } from "react-router-dom";
import ShowPage from "./Landing_page/Show/ShowPage";
import CreateListingPage from "./Landing_page/CreateListing/CreateListingPage";
import UpdateListing from "./Landing_page/Update/UpdateListing";
import SignUpPage from "./Landing_page/SignUp/SignUpPage";
import LoginPage from "./Landing_page/Login/LoginPage";
Route
function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/"  element={<HomePage/>}/>
     <Route path="/login"  element={<LoginPage/>}/>
     <Route path="/signup"  element={<SignUpPage/>}/>
     <Route path="/listings/:id" element={<ShowPage/>} />
     <Route path="/createListing"  element={<CreateListingPage/>} />
     <Route path="/listings/:id/edit" element={<UpdateListing/>} />
     </Routes>
     <Footer/>
    </>
  )  
}

export default App
