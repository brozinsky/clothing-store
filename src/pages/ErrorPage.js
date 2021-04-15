import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    button: {
        background: '#18A0FB',
        borderRadius: '20px',
        margin: theme.spacing(1),
        marginTop: '2.5rem',
        scale: '0.6',
        width: '450px',
        '&:hover': {
            background: "#1373B4",
        },
    },
}));

const ErrorPage = () => {
    const classes = useStyles();
    return (
        <>
            <Wrapper>
                <ImgContaineer>
                    <img src="https://firebasestorage.googleapis.com/v0/b/clothing-store-402a8.appspot.com/o/404.png?alt=media&token=ce3b6eb3-6929-49a6-9a64-0d7cfed144d6" alt="" />
                </ImgContaineer>
                <Message>
                    <h1>404</h1>
                    <span>Are you lost my friend?</span>
                    <NavLink to='/'>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Take me back
                    </Button>
                    </NavLink>
                </Message>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.div`
margin: 0 auto;
overflow-x: hidden;
max-width: 1200px;
min-height: 100vh;
padding: 100px 50px 320px 50px;
background: #090907;
display: flex;
flex-direction: row;
justify-content: space-around;
background-image:
radial-gradient(white, rgba(255,255,255,.01) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.02) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.01) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.2), rgba(255,255,255,.01) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
@media (max-width: 768px) {
    padding-bottom: 40rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100%;
}
`
const ImgContaineer = styled.div`
    animation: move 90s infinite linear ;

img{
    height: 500px;
    animation: rotate 75s infinite linear ;
}

@keyframes rotate{
    0% {
        -webkit-transform: rotate(0deg);
        }
    100% {
        -webkit-transform: rotate(359deg);
        }
}
@keyframes move{
    0% {
        -webkit-transform: translate(0%, 0%);
        }
    25% {
        -webkit-transform: translate(5%, 5%);
        }
        50% {
        -webkit-transform: translate(10%, 0%);
        }
    75% {
        -webkit-transform: translate(0%, -5%);
        }

    100% {
        -webkit-transform: translate(0%, 0%);
        }
}
`

const Message = styled.div`
color: #FFFFFF;
font-family: 'Roboto',"Helvetica";
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
transform: translateY(-10%);

h1{
    font-size: 9rem;
    font-weight: 400;
@media (max-width: 768px) {
    font-size: 5rem;
}
}
span{
    font-size: 2.5rem;
@media (max-width: 768px) {
    font-size: 2rem;
}
}
`

export default ErrorPage;