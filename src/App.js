// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Pages/Home/Home.css';
import './Pages/AboutUs/AboutUs.css';
import './Pages/BlogDetails/BlogDetails.css';
import './Pages/BlogGrid/BlogGrid.css';
import './Pages/BlogStandard/BlogStandard.css';
import './Pages/CheckOut/CheckOut.css';
// import './Pages/Contact/Contact.css';
import './Pages/HomeGrid/HomeGrid.css';
import './Pages/HomeStandard/HomeStandard.css';
// import './Pages/HomeClassic/HomeClassic.css';
import './Pages/HomeCategory/HomeCategory.css';
import './Pages/Faqs/Faqs.css';
// import Home from './shared/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import BlogGrid from './Pages/BlogGrid/BlogGrid';
import BlogStandard from './Pages/BlogStandard/BlogStandard';
import CheckOut from './Pages/CheckOut/CheckOut';
import Contact from './Pages/Contact/Contact';
import HomeGrid from './Pages/HomeGrid/HomeGrid';
import HomeStandard from './Pages/HomeStandard/HomeStandard';
// import HomeClassic from './Pages/HomeClassic/HomeClassic';
import HomeCategory from './Pages/HomeCategory/HomeCategory';
import Shop5Column from './Shop/ShopPages/Shop5Column';
import Faqs from './Pages/Faqs/Faqs';
import Login from './Pages/Authentic/Login';
import ProductTab from './Pages/ProductPages/ProductTab';
import WishList from './Pages/UserAction/WishList';
import Register from './Pages/Authentic/Register';
import Shop4 from './Pages/ShopPages/Shop4';
import React from 'react';













// import BlogDetails from './Pages/BlogDetails/BlogDetails';


// import Home from './shared/Home';





function App() {
  return (
    <div className="App">
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/> 
       <BrowserRouter>
      <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='blogs' element={<BlogGrid />}/>
      <Route path='about' element={<AboutUs />}/>
      <Route path='blog-details' element={<BlogDetails />}/>
      <Route path='blog-standard' element={<BlogStandard />}/>
      <Route path='check-out' element={<CheckOut />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='home' element={<HomeGrid />}/> 
      <Route path='home-standard' element={<HomeStandard />}/>
      {/* <Route path='home-classic' element={<HomeClassic/>}/>   */}
     <Route path='home-category' element={<HomeCategory />}/>
     <Route path='login' element={<Login />}/>
     <Route path='faqs' element={<Faqs/>}/> 
     <Route path='product-tab' element={<ProductTab/>}/> 
     <Route path='shop5' element={<Shop5Column/>}/> 
     <Route path='wish-list' element={<WishList/>}/> 
     <Route path='register' element={<Register/>}/> 
     <Route path='shop' element={<Shop4/>}/> 

      </Routes>
    </BrowserRouter> 
       
        
    {/* <Home/> 
    <AboutUs/>   
    <BlogDetails/> 
    <BlogGrid/> 
    <BlogStandard/>  
    <CheckOut/>
   <Contact/> 
   <HomeGrid/>
   <HomeCategory/> 
    <HomeClassic/> 
    <login/> */}
    {/* <Faqs/> */}
    {/* <Shop5Column/> */}
   
    <Footer/>
      
    

    </div>
  );
}

export default App;
