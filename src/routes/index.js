import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WrapperContents from '../common/components/WrapperContents';

import Login from '../pages/login';
import Register from '../pages/register';
import ProtectedRoute from './ProtectedRoute';
import Protected from './routes-protected';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

function AppRoutes() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();
    return setUserToken(cookies.get('authToken', { path: '/' }));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route
          path="/*"
          element={
            // <ProtectedRoute userToken={!!userToken}>
            <ProtectedRoute userToken={true}>
              <WrapperContents>
                <Protected />
              </WrapperContents>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
