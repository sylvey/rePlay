import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import AppPage from './AppPage';
import { useState } from 'react';

const styledPaper = styled(Paper)`
    padding: 2em
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
`

const SearchPage = () => {
    const [clickApp, setClickApp] = useState(false);
    return(
        <styledPaper>
            <Wrapper>
                <SearchBar/>
                {clickApp ? <AppPage/> : <Results setClickApp={setClickApp}/>}
            </Wrapper>
        </styledPaper>
    )
}

export default SearchPage;