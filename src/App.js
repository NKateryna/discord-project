import './theme/index.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/';
import AppRoutes from './routes/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
