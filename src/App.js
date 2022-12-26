import './App.css';
import { ThemeProvider } from '@mui/material/';
import AppRoutes from './routes/index';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
