import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/Page/HomePage';
import ShopPage from './components/Page/ShopPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<Login />} path="/auth/login" />
                    <Route element={<Register />} path="/auth/register" />
                    <Route element={<ShopPage />} path="/shop" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
