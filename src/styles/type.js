import styled from 'styled-components';

// Headings

export const HeaderOne = styled.h1`
    display:flex;
    justify-content: center;
    align-items:"center";
    color:#fff;
    font-size: 1.5rem;
    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }

`;

export const HeaderTwo = styled.h2`
    display:flex;
    justify-content: center;
    align-items:"center";
    font-size: ${props => props.larger ? "2rem" : "1.5rem"};
    color:${props => props.color ? "#293241" : "#ffffff"};
    background:none;
    @media screen and (min-width: 768px){
        font-size: ${props => props.larger ? "2rem" : "2.5rem"};
        color:${props => props.color ? "#293241" : "#ffffff"};
    }
`;

export const HeaderThree = styled.h3`
    display:flex;
    justify-content: center;
    align-items:"center"; 
    color:#fff;
    font-size: 1rem;
    @media screen and (min-width: 768px){
        font-size: 1rem;
    }
`;

// Lists

export const SkillList = styled.div `
    
    h3 {
        text-transform: uppercase;
        font-size: 1rem;
        color: #EE6C4D;
    }
    ul {
        list-style-type: none;
        padding-inline-start:0;
        p {
            margin: 0;
        }
    }
`;