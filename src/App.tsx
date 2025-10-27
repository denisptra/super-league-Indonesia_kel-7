import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import News from './page/News.tsx';
import Table from './page/Table.tsx';
import Layout from './components/Layout.tsx';
import Match from './page/Match.tsx';
import NewsDetails from './page/NewsDetails.tsx';  


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="match" element={<Match />} />
        <Route path="table" element={<Table />} />
        <Route path="news/:id" element={<NewsDetails />} />
      </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      
    </Routes>
  </div>
  );
}

export default App;
