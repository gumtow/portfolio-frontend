import styled from 'styled-components';

// Headings

export const HeaderOne = styled.h1`
    color:#fff;
    font-size: 1.5rem;
    text-align: center;
    @media screen and (min-width: 768px){
        font-size: 1rem;
        text-align: left;
    }

`;

export const HeaderTwo = styled.h2 `
    display:flex;
    justify-content: center;
    align-items:"center";
    font-size: ${props => props.larger ? "3rem" : "1.5rem"};
    color:${props => props.color ? "#293241" : "#ffffff"};
    background:none;
    @media screen and (min-width: 768px){
        font-size: ${props => props.larger ? "6rem" : "2.5rem"};
        color:${props => props.color ? "#293241" : "#ffffff"};
    }
`;

