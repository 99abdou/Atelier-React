import './App.css';
import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"
import AllCountries from "./AllCountries"
import CountryDetails from "./CountryDetails" 
import Header from './pages/Header';


const App = () => {
  return (
    <>    
    {/* <div className="container-fluid d-flex justify-content-between p-4 mb-2 bg-light text-dark shadow fixed">
        <h2 className="fw-bold">Where in the world</h2>
    <div>
    <button type="button" className="btn btn-light fs-5"><i className="far fa-moon me-2"></i>Dark</button>
    </div>
    
</div> */}
  <Header/>
    <Main>
    <Routes>
        <Route path="/"  element={<AllCountries />} />
        <Route path="/country/:countryName" element={CountryDetails} />
    </Routes>
    </Main>
    </>

  );
};

export default App; 