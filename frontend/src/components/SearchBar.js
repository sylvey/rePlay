import { Input } from "antd";
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 50px;
`

const SearchBar = () => {
    return(
        <Wrapper>
            <Input.Search placeholder="搜尋 APP" style={{ width: '60%' }}/>
        </Wrapper>
    )
}

export default SearchBar;