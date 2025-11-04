import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
const BASE_URL = "http://localhost:8000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) throw new Error("Failed to fetch cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("ERROR: " + err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="Product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<Navigate to={'cities'}/>}
          ></Route>
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path="cities/:id" element={<City />}></Route>
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
