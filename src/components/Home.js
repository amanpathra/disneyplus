import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';

function Home() {

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            //onSnapshot is an event that triggers whenever a change is made in the database(in this case 'movies')
            console.log(snapshot)
        })
    }, [])

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    // background: blue;
    position: relative;
    overflow: hidden;

    &:before{
        content: "";
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
