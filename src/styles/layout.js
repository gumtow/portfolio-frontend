import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    padding: 0rem ;
    margin: 0 auto;
    background: ${props => props.bg};
    min-height: ${props => props.minHeight ? "850px" : "auto"};
    background-color: #282c34;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center top;
`;

export const Wrapper = styled.div`
    padding: 0;
    max-width:${props => props.maxWidth ? "100%" : "1200px"};
    margin: 0 auto;
    @media screen and (min-width: 768px){
        padding: ${props => props.maxWidth ? "0" : "8rem"};
    }
`;

export const NarrowWrapper = styled.div`
    max-width:1200px;
    margin: 0 auto;
    @media screen and (min-width: 768px){
        max-width:900px;
    }
`;

export const ProjectItem = styled.div `
    background: radial-gradient( rgba(73, 88, 103, .5), rgba(193, 140, 93, .75));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 3rem;
    transition: all .5s ease-in-out;
    :hover {
        background: radial-gradient( rgba(231, 173, 153, .75), rgba(206, 121, 107, 1));
           
    }
    :hover>h3 {
        transform: scale(1.1);
    }
`;


// grid containers

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    grid-template-columns: 0.75fr;
    gap: 1rem;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.5rem;
    }

    img{
        width:100%;
    }
`;

export const GridContainerOffset = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px){
        grid-template-columns: 5fr 1fr;
        gap: 1.5rem;
    }

    img{
        width:100%;
    }
`;

// PullQuote

export const PullQuote = styled.div`
    padding: 4rem;
    text-align:center;
    blockquote{
        font-size:1.5rem;
        @media screen and (min-width: 768px){
            font-size: 2rem;
        }
        h6 {
            text-align:center;
        }
    }
    @media screen and (min-width: 768px){
        padding:1rem;
    }
`;

// Button

export const MainBtn = styled.button`
    transition: background 0.3s;
    color:#fff;
    border-radius: 4rem;
    background:#EE6C4D;
    padding: 1rem 2rem;
    margin: 2rem;
    font-size: 1.5rem;
    text-decoration:none;
    cursor:pointer;
    border:none;
    display:flex;
    justify-content: center;
    align-items:"center";
    :hover {
        transition: background 0.3s;
        background:#f1856a;
    }
`;

// FlexCenter

export const FlexCenter = styled.div`
    display:flex;
    justify-content: center;
    align-items:"center";

`;

// Profile Image

export const ProfileImage = styled.img`
    max-width:75px;
    max-height:75px;
    @media screen and (min-width: 768px){
        max-width:50px;
        max-height: 50px;
    }
`;

