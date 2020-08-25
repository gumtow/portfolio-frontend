import styled from 'styled-components';

// Headings

export const HeaderOne = styled.h1`
    font-family: azo-sans-web,sans-serif;
    font-weight: 500;
    font-style: normal;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 0.25rem;
    color:#EE6C4D;
    font-size: 2rem;
    text-transform:uppercase;
    text-align:center;
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
    margin: 0;
    padding: 2rem 0;
    font-size: ${props => props.larger ? "2rem" : "1.5rem"};
    color:${props => props.color ? "#EE6C4D" : "#ffffff"};
    background:none;
    @media screen and (min-width: 768px){
        font-size: ${props => props.larger ? "2rem" : "2.5rem"};
        color:${props => props.color ? "#EE6C4D" : "#ffffff"};
        margin: 0.25rem 0rem 3.5rem;
    }
`;

export const HeaderThree = styled.h3`
    max-width: 350px;
    margin: 0 auto;
    text-align:center;
    padding: 0.25rem 0rem 2rem;
    p{
        font-family: ff-tisa-web-pro,serif;
        font-weight: 400;
        font-style: italic;
        color:#fff;
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

// Links

export const InfoLinks = styled.div `
    color:#fff;
    a {
        transition: color 0.3s;
        padding: 0 1rem;
    }
    a:hover{
        transition: color 0.3s;
        color: #EE6C4D;
    }

`;

