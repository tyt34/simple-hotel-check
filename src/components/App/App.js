import './App.css';
import Main from '../Main/Main'
import Auth from '../Auth/Auth'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLICK_URL}>
        <Routes>
          <Route path="/main" element={
            <>
              <Main/>
            </>
          } />
        </Routes>
        <Routes>
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
