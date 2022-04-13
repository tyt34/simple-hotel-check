import './App.css';
import Main from '../Main/Main'
import Auth from '../Auth/Auth'
import { HashRouter, Routes, Route, Switch} from 'react-router-dom'
///simple-hotel-check
function App() {
  return (
    <HashRouter basename='/simple-hotel-check'>
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
    </HashRouter>
  );
}

export default App;
