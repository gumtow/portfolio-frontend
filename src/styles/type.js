import styled from 'styled-components';

// Headings

export const HeaderOne = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    @media screen and (min-width: 768px){
        font-size: 1rem;
        text-align: right;
    }

`;

export const HeaderTwo = styled.h2 `
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color:#fff;
    padding: 2rem;
    background-image: url(${props => props.bg || "none"});
    background-size:cover;
    @media screen and (min-width: 768px){
        font-size:6rem;
    }
`;

