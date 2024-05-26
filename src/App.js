import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";
import Error from "./components/Error";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries/>}></Route>
        <Route path="/:name" element={<SingleCountry/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
