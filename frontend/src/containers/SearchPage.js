import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import AppPage from './AppPage';
import { useNavigate, useLocation } from 'react-router-dom';
import { startSearch } from '../api';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const SearchPage = () => {
    
    const [searchInput, setSearchInput] = useState([])
    
    return (
        <Wrapper>
            <SearchBar setSearchInput={setSearchInput}/>
            <Results searchInput={searchInput}/>
        </Wrapper>
    )




    // const [clickApp, setClickApp] = useState(false);
    // return(
    //     <Wrapper>
    //         <SearchBar/>
    //         {clickApp ? <AppPage/> : <Results setClickApp={setClickApp}/>}
    //     </Wrapper>
    // )
}

export default SearchPage;