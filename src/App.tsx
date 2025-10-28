import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.tsx';
import News from './page/News.tsx';
import Table from './page/Table.tsx';
import Layout from './components/Layout.tsx';
import Match from './page/Match.tsx';
import NewsDetails from './page/NewsDetails.tsx';
import Login from './page/Login.tsx';
import AdminLayout from './components/admin/Layout.tsx';
import Dashboard from './page/admin/Dashboard.tsx';
import NewsDashboard from './page/admin/NewsDashboard.tsx';
import StatisticDashboard from './page/admin/StatsDashboard.tsx';
import DashboardTeam from './page/admin/TeamsDashboard.tsx';
import MatchDashboard from './page/admin/MatchDashboard.tsx';
import UsersDashboard from './page/admin/UsersDashboard.tsx';
import Unauthorized from './page/admin/Unauthorized.tsx';
import ProtectedRoute from './components/admin/ProtectedRoute.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="match" element={<Match />} />
          <Route path="table" element={<Table />} />
          <Route path="news/:id" element={<NewsDetails />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<div>404 Not Found</div>} />

        {/* Dashboard — Role-based Access */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['Administrator', 'Editor', 'Writer']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Admin + Editor + Writer bisa lihat Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Administrator & Editor */}
          <Route
            path="matches"
            element={
              <ProtectedRoute allowedRoles={['Administrator', 'Editor']}>
                <MatchDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="news"
            element={
              <ProtectedRoute allowedRoles={['Administrator', 'Writer']}>
                <NewsDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <ProtectedRoute allowedRoles={['Administrator', 'Editor']}>
                <StatisticDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="teams"
            element={
              <ProtectedRoute allowedRoles={['Administrator', 'Editor']}>
                <DashboardTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute allowedRoles={['Administrator']}>
                <UsersDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
