
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ContentManager from './pages/ContentManager';
import UsersManager from './pages/usersManager';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/privateroute';
import TeamsManager from './pages/teamsManager';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              // <PrivateRoute>
                <Dashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="/content"
            element={
              //<PrivateRoute>
                <ContentManager />
              //</PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              //<PrivateRoute>
                <UsersManager />
              //</PrivateRoute>
            }
          />
          <Route
            path="/teams" 
            element={
            //<PrivateRoute>
              <TeamsManager />
            //</PrivateRoute>
        } 
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;