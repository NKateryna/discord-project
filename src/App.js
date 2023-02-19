import './theme/index.css';
import theme from './theme';
import AuthProvider from './contexts/AuthContext';
import { ThemeProvider } from '@mui/material/';
import AppRoutes from './routes/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
