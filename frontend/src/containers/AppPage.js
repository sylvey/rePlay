import styled from 'styled-components';
import img from '../components/images/godwawa.JPG';
import '../css/appPage.css';
import { Button } from 'antd';

const Wrapper = styled.div`
    display: flex;
    margin-top: 2em;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 3em;
    overflow-y: auto;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`

const AppPage = () => {

    const commentList = [1, 2, 3];

    return(
        <Wrapper>
            <div className="block">
                <div className="basic-info">
                    <h5 className="name"> GodWaWa </h5>
                    <img src={img} className='appImg' />
                    <div className="scoreFrame">
                        <p className='number'>App 預測分數</p>
                    </div>
                </div>
                <div className="commentKeys">
                    <Button>面相評論</Button>
                    <Button>面相評論</Button>
                    <Button>面相評論</Button>
                    <Button>面相評論</Button>
                    <Button>面相評論</Button>
                </div>
                <div className="keywordsFrame">
                    <div className="keywords">
                        <Button className='keyword'>關鍵</Button>
                        <Button className='keyword'>關鍵</Button>
                        <Button className='keyword'>關鍵</Button>
                        <Button className='keyword'>關鍵</Button>
                        <Button className='keyword'>關鍵</Button>
                        <Button className='keyword'>關鍵</Button>
                    </div>
                </div>
            </div>
            <div className="commentList">
                {
                    commentList.map((item) => {
                        return(
                        
                            <div className="comment">
                                <div className="scoreContainer">
                                    <div className="commentScoreFrame">
                                        評論分數
                                    </div>
                                </div>
                                <div className="contentContainer">評論內容</div>
                            </div>
                        
                        )
                    })
                }
            </div>
        </Wrapper>   
    )
}

export default AppPage;