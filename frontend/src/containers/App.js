//import './App.css';
import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
`

const styledPaper = styled(Paper)`
  padding: 2em
`

function App() {
  const [goSearch, setGoSearch] = useState(false)

  return (
    <styledPaper>
      {goSearch ? <SearchPage/> : <HomePage setGoSearch={setGoSearch}/>}
    </styledPaper>
  );
}

export default App;
