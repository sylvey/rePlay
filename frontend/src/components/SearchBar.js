import { Input } from "antd";
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
    font-size: 20px;
`

const SearchBar = () => {
    return(
        <Wrapper>
            <h2>rePlay 🌟</h2>
            <Input.Search placeholder="搜尋 APP" style={{ width: '60%' }}/>
        </Wrapper>
    )
}

export default SearchBar;