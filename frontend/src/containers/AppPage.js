import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../components/images/godwawa.JPG';
import '../css/appPage.css';
import { Button } from 'antd';
import { getAppContent } from '../api';
import { useLocation } from 'react-router-dom';


const Wrapper = styled.div`
    display: flex;
    margin-top: 2em;
    position: relative;
    width: 100%;
    //height: 100vh;
    padding: 3em;
    overflow-y: auto;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
`

const AppPage = () => {
    const { state } = useLocation()
    //console.log('state', state);
    const commentList = [1, 2, 3];

    const [appContent, setAppContent] = useState([])
    const [keywords, setKeywords] = useState([])

    useEffect(() => {
        const getContent = async() => {
            let content = await getAppContent(state.id);
            setAppContent(content);
            setKeywords(content.keywords)
            console.log(content);
        }
        getContent();
    }, []);

    return(
        <Wrapper>
            <div className="block">
                <div className="basic-info">
                    <h5 className="name"> {appContent.app_name} </h5>
                    <img src={appContent.app_image} className='appImg' />
                    <div className="scoreFrame">
                        <p className='number'>{appContent.app_rating}</p>
                    </div>
                </div>
                <div className="commentKeys">
                    <Button>Update</Button>
                    <Button>Watch</Button>
                    <Button>Game Info</Button>
                    <Button>Other</Button>
                </div>
                <div className="keywordsFrame">
                    <div className="keywords">
                        {
                            keywords.map((kw, idx) => {
                                return <Button className='keyword' key={idx}> {kw} </Button>
                            })
                        }
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