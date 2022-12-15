import Title from "../components/Title"
import Intro from "../components/Intro"
import styled from 'styled-components';
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
`

const HomePage = ({ setGoSearch }) => {

    return(
        <Wrapper>
            <Title/>
            <Intro setClick={setGoSearch}/>
        </Wrapper>
    )
}

export default HomePage;