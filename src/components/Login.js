import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp >Get all there</SignUp>
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/06/21, the price of Disney+ and The Disney Bundle will increased by $1.</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 75px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("/images/login-background.jpg") top / cover no-repeat;
        z-index: -1;
        opacity: 0.8;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    padding: 12px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: all 250ms;
    margin-top: 10px;
    margin-bottom: 8px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 10px;
    letter-spacing: 1.5px;
    line-height: 1.6;
    text-align: center;
`

const CTALogoTwo = styled.img`
    width: 90%;
    margin-top: 12px;
`