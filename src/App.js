import './App.css';
import styled from "styled-components";
import { Index } from './components/accountBox';

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
