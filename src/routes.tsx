import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Confirmation } from './pages/Confirmation';
import {Home} from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirmation" element={<Confirmation/>} />
    </Routes>
  )
}
