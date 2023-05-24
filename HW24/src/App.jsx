import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './pages/pageUsers/components/UsersList/UsersList';
import AlbumsList from './pages/pageUsers/components/AlbumsList/AlbumsList';
import PhotosList from './pages/pageUsers/components/PhotosList/PhotosList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId/albums" element={<AlbumsList />} />
          <Route path="/albums/:albumId/photos" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;