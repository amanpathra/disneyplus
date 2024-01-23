import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    padding: 30px;
    margin-top: 30px;
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border: 2px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.25s ease-out;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.5);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
`