import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import About from './page/About.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/match" element={<div>Contact Page</div>} />
      <Route path="/table" element={<div>Services Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;