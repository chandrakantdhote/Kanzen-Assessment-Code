import logo from './logo.svg';
import './App.css';
import CatBreedList from './CatBreedList';
import CatImageDetails from './CatImageDetails';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (

  <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<CatBreedList/>} />
        <Route path="/catlist/:id" element={<CatImageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
