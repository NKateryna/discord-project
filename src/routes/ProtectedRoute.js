import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userToken, children }) => {
  if (!userToken) {
    return <Navigate to="login/" replace />;
  }
  return children;
};

export default ProtectedRoute;
