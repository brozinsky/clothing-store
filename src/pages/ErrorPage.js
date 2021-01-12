import React from 'react';

import styled from "styled-components";

const Wrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
padding-top: 500px;
`

const ErrorPage = () => {
    return (
        <>
            <Wrapper>
                <h1>Error 404</h1>
                <h2>You lost mate?</h2>
            </Wrapper>
        </>

    );
}

export default ErrorPage;