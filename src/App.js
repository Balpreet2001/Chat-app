import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
function App() {
  return (

<BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn />}>
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Route>
      <Route path="/" element={<Home />}>
        {/* <Route path="/" element={<Home />} /> */}
      </Route>
    </Routes>
</BrowserRouter>    

    
  );
}

export default App;
