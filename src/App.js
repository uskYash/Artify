import './App.css';
// import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Register from './routes/Register';
import Cards from './routes/Cards';
import Sidebar from './routes/Sidebar';
import Video1 from './routes/Video1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/video1' element={<Video1/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
