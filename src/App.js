import AuthProvider from './contexts/AuthContext';
import { ThemeProvider } from '@mui/material/';
import theme from './theme';
import './theme/index.css';
import AppRoutes from './routes/index';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
