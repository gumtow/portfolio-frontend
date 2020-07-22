import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    padding: 0rem;
    margin: 0 auto;
    background: ${props => props.bg};
    background-size:cover;
`;

export const Wrapper = styled.div`
    padding: 1rem;
    max-width:1200px;
    margin: 0 auto;
    @media screen and (min-width: 768px){
        padding: 2rem;
    }
`;

export const NarrowWrapper = styled.div`
    max-width:1200px;
    margin: 0 auto;
    @media screen and (min-width: 768px){
        max-width:900px;
    }
`;


// grid containers

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    color:#fff;
    border-radius: 4rem;
    background:#EE6C4D;
    padding: 0.5rem 1.5rem;
    margin: 2rem;
    font-size: 1.25rem;
    text-decoration:none;
    cursor:pointer;
    border:none;
    display:flex;
    justify-content: center;
    align-items:"center";
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
    @media screen and (min-width: 768px){
        max-width:50px;
    }
`;

