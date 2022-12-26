import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 30%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 20px;
    margin: 20px;
    padding: 40px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`

const InputComment = () => {

    const navigate = useNavigate();

    const navigateToApp = () => {
        navigate('/app/:id')
    }
    

    return (
        <Wrapper>
            <h2>我要預測APP</h2>
            <p>想尋找某種特性的APP卻又毫無頭緒，請輸入一段評論讓我們幫你找到最適配的 App！</p>
            <Input.Search
                placeholder="輸入你的評論"
                onSearch={navigateToApp}
                style={{
                    width: 200,
                }}
            />
        </Wrapper>
    )
}

export default InputComment;