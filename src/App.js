import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import MainLayout from './components/layouts/main-layout';

function App() {
  return (
    <div className="App">
      
     
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
    
      
    </div>
  );
}

export default App;
