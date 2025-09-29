import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import Table from './page/Table.tsx';
import Layout from './components/Layout.tsx';
import Match from './page/Match.tsx';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="match" element={<Match />} />
        <Route path="table" element={<Table />} />
        <Route path="news" element={<News />} />
      </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      
    </Routes>
  </div>
  );
}

export default App;
