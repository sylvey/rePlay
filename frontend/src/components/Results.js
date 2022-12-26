import styled from 'styled-components';
import '../css/searchPage.css';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { startSearch, searchKeyword } from '../api';

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


const Results = ({ searchInput }) => {

    const navigate = useNavigate();

    const navigateToApp = () => {
        navigate('/app/:id')
    }

    const [apps, setApps] = useState([])
    const [appExisted, setAppExisted] = useState(false)

    const getApps = async () => {
        // get information of apps from DB
        const response = await startSearch;
        console.log('res', response.data)
        setApps(response.data);
    }

    const searchKeyword = async() => {
        const res = await searchKeyword(searchInput)
        console.log('response in searchKeyword : ', res);
        setApps(res)
    }

    useEffect(() => {
        getApps()
        searchKeyword()
        console.log('useeffect apps: ', apps);
    }, searchInput)

    return(
        <Wrapper>
            {
                appExisted ?
                    apps.map((item) => (
                        <>
                            <div className="resBlock" key={item.app_id}>
                                <div className="resImgContainer">
                                    <img className='resImg' src={item.app_image}  />
                                </div>
                                <div className="resInfo">
                                    <div className="title">
                                        <h5 className='name'> {item.app_name} </h5>
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
                    :
                    <p>No app existed !</p>
            }




            {
                // apps.map((item) => (
                //     <>
                //         <div className="resBlock" key={item.app_id}>
                //             <div className="resImgContainer">
                //                 <img className='resImg' src={item.app_image}  />
                //             </div>
                //             <div className="resInfo">
                //                 <div className="title">
                //                     <h5 className='name'> {item.app_name} </h5>
                //                     <div className="comments">
                //                         <Button icon={<LikeOutlined />}></Button>
                //                         <Button>正向評論</Button>
                //                         <Button>正向評論</Button>
                //                     </div>
                //                     <div className="comments">
                //                         <Button icon={<DislikeOutlined />}></Button>
                //                         <Button>負向評論</Button>
                //                         <Button>負向評論</Button>
                //                     </div>
                //                     <div className="rating" onClick={navigateToApp}>
                //                         <p>查看評價🌟</p>
                //                         {/* <img src={starImg} className='starImg'/> */}
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </>
                // ))
            }
            {/* <Button>下一頁</Button> */}
        </Wrapper>
    )
}

export default Results;