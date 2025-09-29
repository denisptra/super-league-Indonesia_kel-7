import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import Match from './page/Match.tsx';
import Table from './page/Table.tsx';
import Layout from './components/Layout.tsx';
import News from './page/News.tsx';
function App() {

  return (
    <>
      <div className='bg-gray-200'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/match" element={<Match />} />
            <Route path="/table" element={<Table />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;