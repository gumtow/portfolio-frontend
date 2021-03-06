import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    padding: 0rem ;
    margin: 0 auto;
    background: ${props => props.bg};
    background-color: #282c34;
    background-size: ${props => props.bgSize ? props.bgSize : "cover"};
    background-repeat: no-repeat;
    background-position: center top;
`;

export const Wrapper = styled.div`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    position:relative;
    max-width:${props => props.maxWidth ? "100%" : "1200px"};
    min-height: ${props => props.minHeight ? "650px" : "auto"};
    margin: 0 auto;
    @media screen and (min-width: 768px){
        padding: ${props => props.maxWidth ? "0" : "4rem"};
        min-height: ${props => props.minHeight ? props.minHeight : "auto"};
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
    // background: radial-gradient( rgba(73, 88, 103, .5), rgba(193, 140, 93, .75));
    background: rgba(40, 44, 52, 0);
    // position:absolute;
    //     top:0;
    //     left:0;
    min-height: 100%;
    min-width:100%
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 3rem;
    transition: all 0.3s ease-in-out;
    div{
        
    }
    h3 {
        transition: all 0.5s;
        // padding:3rem;
    }
    :hover {
        background: rgba(40, 44, 52, 0.75);
           
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

// Project image

export const ProjImage = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-basis:50%;
    flex-direction: ${props => props.flexDirection};
    img{
        max-width:50%;
        margin:3rem;
    }
`;

