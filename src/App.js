import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route  element={<Home/>} path="/" />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
