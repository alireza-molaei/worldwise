import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Prduct from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="product" element={<Prduct />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of citires</p>}></Route>
          <Route path="cities" element={<p>list of cities</p>}></Route>
          <Route path="countries" element={<p>contries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
