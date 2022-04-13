import './App.css';
import Main from '../Main/Main'
import Auth from '../Auth/Auth'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
///simple-hotel-check
function App() {
  return (
    <BrowserRouter basename='/simple-hotel-check'>
        <Routes>
          <Route path="/" element={
            <>
              <Main/>
            </>
          } />
          <Route path="/auth" element={
            <>
              <Auth/>
            </>
          } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
