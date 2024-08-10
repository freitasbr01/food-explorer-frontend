import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { UserManagement } from '../components/UserManagement';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/users" element={<UserManagement />} />

      <Route path="*" exact={true} element={<Home />} />
    </Routes>
  );
}