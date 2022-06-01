import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Index';
import Tintuc from './pages/Tintuc';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/tintuc" element={<Tintuc />} /> 
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
