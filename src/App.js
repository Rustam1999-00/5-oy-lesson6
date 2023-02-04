
import Header from "./companents/Header/Heaser";
import { Routes,Route } from "react-router-dom";
import { Charecter } from "./pages/Charecter/Charecter";
import { Location } from "./pages/Location/Location";
import { Eepsode } from "./pages/Eepsode/Eepsode";

function App() {
  return (
    <div className="App">
      <Header/>
 <div className="text-center fs-3 pt-5">
 <Routes>
        <Route index path="/" element={<Charecter/>}/>
        <Route  path="/Wether" element={<Eepsode/>}/>
        <Route  path="/News" element={<Location/>}/>
      </Routes>
 </div>
    
    </div>
  );
}

export default App;
