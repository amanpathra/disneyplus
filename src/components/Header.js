import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <div>
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/a/AAcHTtfABw16nTpiqpb7lqIafWfr3p362ZBnogm_lwaHNTjJJ0k=s96-c-rg-br100"/>
        </Nav>
    </div>
  )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow: hidden;
`
const Logo = styled.img`
    width: 80px
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
            margin-right: 5px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: transform 0.15s ease-out;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer
`