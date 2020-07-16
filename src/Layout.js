import React from 'react';
import { FullWidthWrapper } from './styles/layout';
import { Wrapper } from './styles/layout';

const Layout = (props) => {
    return(
        <FullWidthWrapper bg={props.bg}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </FullWidthWrapper>
    )
}

export default Layout;