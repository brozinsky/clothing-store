import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { footerAnimation } from '../animation';

import styled from "styled-components";

import logo from "../img/w_logo.svg";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const Footer = () => {
    const [, setRendered] = useState(false);

    useEffect(() => {
        setRendered(true)
    }, [])

    return (
        <Container
            variants={footerAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <footer className='footer'>
                <ul className="info">
                    <li>FAQ</li>
                    <li>Delivery</li>
                    <li>Returns and exchanges</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                <div className="social-container">
                    <img className="social-logo" src={logo} alt="logo" />

                    <h3 className="social-title">Follow us</h3>
                    <ul className="social">
                        <li className="social-link"><InstagramIcon /></li>
                        <li className="social-link"><FacebookIcon /></li>
                        <li className="social-link"><TwitterIcon /></li>
                        <li className="social-link"><YouTubeIcon /></li>
                    </ul>
                </div>
                <ul className="contact">
                    <h3 className="contact-title">
                        <EmailOutlinedIcon /> Contact
                    </h3>
                    <li>Lorem Street 25
                    <br /> 01-2005 Ipsum
                    <br /> Tel: 1-800-123-4567
                    <br /> email : info@dummy.com </li>
                    <li> <NavLink to='/contact' className="info-link">Use our contact form </NavLink></li>
                </ul>
                <div className="bottom">
                    <hr className="hr" />
                    <small className="copy">
                        Created by
                        <a className="copy-link" href="https://github.com/brozinsky"> brozinsky</a> &copy;
                    2021</small>
                </div>
            </footer>
        </Container>
    );
}

const Container = styled(motion.div)`
  background: #ddd;
  height: 18rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #252525;
  color: #ccc;
  @media (max-width: 768px) {
        height: 35rem;
      }

  .footer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      max-width: 1200px;
      background: #252525;
      margin: 0 auto;
      @media (max-width: 768px) {
        flex-direction: column;
        height: 35rem;
      }
  }

  .social{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &>li{
    list-style-type: none;
        &:hover{
            color: #fff;
            cursor: pointer;
        }
    }
    &-title{
        margin-bottom: 1rem;
        font-size: 1.6rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 300;
        @media (max-width: 768px) {
            font-size: 1.2rem;
            margin-bottom: 0.2rem;
      }
    }
    &-link{
        margin: 0.2rem 0.7rem;
        scale: 1.4;
        @media (max-width: 768px) {
            scale: 1.2;
      }
    }
    &-logo{
        width: 20rem;
        @media (max-width: 768px) {
            width: 16rem;
      }
    }
  }

  .info{
    text-decoration: none;
    margin-left: 2rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
        margin-left: 0rem;
        margin-top: 1rem;
        text-align: center;
      }

    &>li{
    list-style-type: none;
    margin-bottom: 0.8rem;
        &:hover{
            color: #fff;
            cursor: pointer;
        }
        &>a{
        text-decoration: none;
        color: inherit;
    }
    }
    &-link{
        text-decoration: none;
        color: inherit;
        text-decoration: none;
        border: solid 1px #ccc;
        padding: 0.4rem 1rem;
        &:hover{
        color: #252525;
        background: #ccc;
        }
    }
  }

  .contact{
    text-decoration: none;
    margin-right: 2rem;
    line-height: 1.5rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
        line-height: 1.4rem;
        margin-bottom: 3rem;
        margin-top: 0;
        text-align: center;
      }
    &-title{
        margin-bottom: 0.8rem;
        @media (max-width: 768px) {
            margin-bottom: 0.3rem;
            margin-top: 1rem;
        }
    }
    &>li{
    list-style-type: none;
    margin-bottom: 1.5rem;
    }
  }

  .bottom{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      padding: 0.5rem;
      color: #ccc;
  }

  .copy{
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 0.1rem;
    font-size: 0.85rem;
    &-link{
        color: inherit;
        text-decoration: none;

        &:hover{
        color: #fff;
        }
    }
  }
  .hr{
      width: 80vw;
      margin: 0 auto;
      margin-bottom: 0.5rem;
  }
`

export default Footer;