import styled, { css } from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Wrapper = styled.div`
    width: 70%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 20px;
    margin: 20px;
    padding: 40px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    ${props => props.primary && css`
        margin-bottom: 0px;
    `}
`

const Intro = ({ setClick }) => {

    return(
        <Wrapper>
            <h2>我要查詢評價</h2>
            <p>看上某些 App 但又不確定適不適合自己，先來看看我們基於文字探勘技術對其評價做出的分析吧!</p>
            <Button 
                type="primary" 
                icon={<SearchOutlined />}
                onClick={ () => setClick(true) }
                >
                查詢評價
            </Button>
        </Wrapper>
    )
} 

export default Intro;