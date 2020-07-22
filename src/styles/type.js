import styled from 'styled-components';

// Headings

export const HeaderOne = styled.h1`
    font-family: azo-sans-web,sans-serif;
    font-weight: 500;
    font-style: normal;
    display:flex;
    justify-content: center;
    align-items:"center";
    color:#EE6C4D;
    font-size: 2rem;
    text-transform:uppercase;
    @media screen and (min-width: 768px){
        font-size: 4rem;
    }

`;

export const HeaderTwo = styled.h2`
    font-family: proxima-nova,sans-serif;
    font-weight: 400;
    font-style: normal;
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
    max-width: 350px;
    margin: 0 auto;
    text-align:center;
    p{
        font-family: ff-tisa-web-pro,serif;
        font-weight: 400;
        font-style: italic;
    }
    
    display:flex;
    justify-content: center;
    align-items:"center"; 
    color:#fff;
    font-size: 1.5rem;
    line-height: 1.75rem;
    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }
`;

// Lists

export const SkillList = styled.div`
    padding: 0 1rem;
    h3 {
        text-transform: uppercase;
        font-size: 1rem;
        color: #EE6C4D;
    }
    ul {
        list-style-type: none;
        padding-inline-start:1rem;
        
        p {
            font-size: 1rem;
            margin: 0;
        }
    }
`;

