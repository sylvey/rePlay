import styled from 'styled-components';
import img from './images/godwawa.JPG';
import starImg from './images/star.png';
import '../css/searchPage.css';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { startSearch } from '../api';

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


const Results = () => {

    const navigate = useNavigate();

    const navigateToApp = () => {
        navigate('/app/:id')
    }

    const [apps, setApps] = useState([])

    const getApp = async () => {
        // get information of apps from DB
        const response = await startSearch;
        console.log('res', response)
        setApps(response);
    }
    console.log(state);

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
                                    <h5 className='name'> GodWaWa </h5>
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
                                    <div className="rating" onClick={navigateToApp}>
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