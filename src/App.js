import Work from "./components/work/Work";
import Home from "./home/Home";


import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {
  //Menu not open by default
  
  //Passed as props
  {/**Structure
Top
Section : Intro, Portfolio, Work... testimonials */}
  return (
    <div className="app">
      
      <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work/:id" element={<Work/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
