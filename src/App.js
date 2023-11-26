import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './jsx/pages/home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/"
              element={
                <Home />
              }
              exact />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
