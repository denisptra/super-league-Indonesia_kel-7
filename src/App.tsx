import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import About from './page/About.tsx';
import Match from './page/Match.tsx';
import Table from './page/Table.tsx';
import Layout from './components/Layout.tsx';
import Login from './page/Login.tsx';

function App() {
  return (
    <>
      <div className='bg-gray-200 py-30'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/match" element={<Match />} />
            <Route path="/table" element={<Table />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;