import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

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
    return (
        <Wrapper>
            <h2>我要做評論預測</h2>
            <p>想知道某一則評論是屬於哪個 App 的，輸入評論讓我們訓練的模型預測看看！</p>
            <Input.Search
                placeholder="輸入你的評論"
                //onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
        </Wrapper>
    )
}

export default InputComment;