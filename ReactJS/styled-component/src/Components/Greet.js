import React from "react";
import styled from "styled-components";

const Styledh1 = styled.h1`
    font-size: 36px;
    color: white;
    background-color: black;
`;

const Wrapper = styled.section`
    background-color: #B8B1B1;
    margin: 30px;
    padding: 50px;
`;

const greet = () => {
    return(
        <Wrapper>
        <Styledh1>Hello World</Styledh1>
        </Wrapper>
    )
}

export default greet;