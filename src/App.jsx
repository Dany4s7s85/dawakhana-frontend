import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from 'context/authContext';
import { StyledToastContainer } from 'styles/App.styles';
import GlobalStyles from 'styles/GlobalStyles.styles';
import { LoadingContextProvider } from 'context/loadingContext';
import { SideNavContextProvider } from 'context/sideNavContext';
import { FiltersContextProvider } from 'context/filtersContext';
import { ThemeProvider } from 'context/themeContext';
import Router from './Router';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <LoadingContextProvider>
      <ThemeProvider>
        <SideNavContextProvider>
          <FiltersContextProvider>
            <GlobalStyles />
            <BrowserRouter>
              <AuthContextProvider>
                <Router />
              </AuthContextProvider>
            </BrowserRouter>
            <StyledToastContainer />
          </FiltersContextProvider>
        </SideNavContextProvider>
      </ThemeProvider>
    </LoadingContextProvider>
  );
}

export default App;
