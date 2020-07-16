import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    padding: 0rem;
    margin: 0 auto;
    background: ${props => props.bg};
    background-size:cover;
`;

export const Wrapper = styled.div`
    padding: 2rem;
    max-width:1200px;
    margin: 0 auto;
    @media screen and (min-width: 768px){
        padding: 4rem;
    }
`;

// grid container

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
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
            font-size: 3rem;
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
    padding: 1rem 3rem;
    font-size: 1.5rem;
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