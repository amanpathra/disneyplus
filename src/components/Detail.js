import React from 'react';
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 • 70m • Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh -75px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 80%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    width: 26vw;
    min-height: 170px;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Controls = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    height: 48px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background-color: rgb(198, 198, 198);
    }

    img{
        height: 25px;
        margin-right: 5px;
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249, 0.5);
    color: white;
    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid rgba(249, 249, 249, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
    margin-right: 15px;
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)``;

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`