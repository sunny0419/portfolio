import logo from './logo.svg';
import './App.css';
import Styled01 from "./pages/tutorial/Styled01";
import Styled04 from "./pages/tutorial/Styled04";
import Styled05 from "./pages/tutorial/Styled05";
import GlobalStyle from "./styles/global";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Styled06 from "./pages/tutorial/Styled06";
import Styled07 from "./pages/tutorial/Styled07";
import Styled08 from "./pages/tutorial/Styled08";

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Styled08/>
        </ThemeProvider>
    </>
  );
}

export default App;
