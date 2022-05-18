import Main from '../Main/Main'
import Auth from '../Auth/Auth'
import { HashRouter, Routes, Route} from 'react-router-dom'
const BASENAME = process.env.REACT_APP_BASENAME
let base
if (BASENAME === undefined) {
  base = '/simple-hotel-check'
} else {
  base = BASENAME
}

function App() {
  return (
    <HashRouter basename={base}>
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
