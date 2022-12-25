import styled from 'styled-components';
import img from './images/godwawa.JPG';
import starImg from './images/star.png';
import '../css/searchPage.css';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 3em;
    overflow-y: auto;
    justify-content: center;
    text-align: center;
    color: aliceblue;
`

const numResults = [1, 2, 3]


const Results = ({ setClickApp }) => {
    return(
        <Wrapper>
            {
                numResults.map((item) => (
                    <>
                        <div className="resBlock" key={item.id}>
                            <div className="resImgContainer">
                                <img className='resImg' src={img}  />
                            </div>
                            <div className="resInfo">
                                <div className="title">
                                    <p className='name'> GodWaWa </p>
                                    <div className="comments">
                                        <Button icon={<LikeOutlined />}></Button>
                                        <Button>正向評論</Button>
                                        <Button>正向評論</Button>
                                    </div>
                                    <div className="comments">
                                        <Button icon={<DislikeOutlined />}></Button>
                                        <Button>負向評論</Button>
                                        <Button>負向評論</Button>
                                    </div>
                                    <div className="rating" onClick={() => setClickApp(true)}>
                                        <p>查看評價🌟</p>
                                        {/* <img src={starImg} className='starImg'/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
            {/* <Button>下一頁</Button> */}
        </Wrapper>
    )
}

export default Results;