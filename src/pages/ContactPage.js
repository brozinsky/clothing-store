import React from 'react'
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import Footer from '../components/Footer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";

const ContactPage = () => {
    return (
        <>
            <Wrapper
                variants={pageAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <h2 className="title">Contact us</h2>
                <form className='form' action="">
                    <TextField id="standard-basic" label="Name" variant="outlined" />
                    <TextField id="standard-basic" label="e-mail" variant="outlined" />
                    <TextField
                        id="outlined-textarea"
                        label="Your message..."
                        multiline
                        variant="outlined"
                    />
                    <Button size="large" variant="contained">Submit</Button>
                </form>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled(motion.div)`
margin: 0 auto;
max-width: 1200px;
padding-top: 70px;
overflow: hidden;

.title{
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  .form{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 24rem;
    min-height: 50rem;
    &>div{
        margin-bottom: 1rem;
    }
  }

`

export default ContactPage;