import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HauntedVilla from './scenes/hauntedvilla';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HauntedVilla />} />
          <Route path='/hauntedgraveyard' element={<HauntedVilla />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
