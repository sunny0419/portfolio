import logo from './logo.svg';
import './App.css';
import GlobalStyle from "./styles/global";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main/>
        </ThemeProvider>
    </>
  );
}

export default App;
