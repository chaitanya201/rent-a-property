
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RentProperty from './pages/RentProperty';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<RentProperty />}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
