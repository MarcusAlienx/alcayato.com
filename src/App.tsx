import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';
import Tracking from './components/Tracking';
import './App.css';

function App() {
  return (
    <QuoteProvider>
      <Router>
        <ScrollToTop />
        <Tracking />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:brandId" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    </QuoteProvider>
  );
}

export default App;
