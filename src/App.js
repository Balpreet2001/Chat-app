import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
        <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
