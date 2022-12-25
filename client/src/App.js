import logo from './logo.svg';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route path="/restaurants/:id/update" element={<UpdatePage />} />
      </Routes>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
