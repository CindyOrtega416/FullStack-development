import logo from './logo.svg';
import './App.css';
import { Index } from './components/accountBox';
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (
    <AppContainer>
      <Index />
    </AppContainer>
  );
}

export default App;
