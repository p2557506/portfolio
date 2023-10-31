import { BrowserRouter,Route,Routes } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./home/Home";

function App() {
  {/**Structure
Top
Section : Intro, Portfolio, Work... testimonials */}
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
