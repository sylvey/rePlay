import Title from "../components/Title"
import Intro from "../components/Intro"
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
  align-items: center;
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