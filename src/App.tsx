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
        {/*<Route path="news" element={<News />} />*/}
      </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      
    </Routes>
  </div>
  );
}

export default App;

//test nnti hapus
/*
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersPage from "./page/UsersPage";
import NewsPage from "./page/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/users">Users</Link>
        <Link to="/news">News</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

