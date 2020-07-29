import React from 'react';
import { FullWidthWrapper } from './styles/layout';
import { Wrapper } from './styles/layout';

const Layout = (props) => {
    return(
        <FullWidthWrapper bg={props.bg}>
            <Wrapper maxWidth={props.maxWidth}>
                {props.children}
            </Wrapper>
        </FullWidthWrapper>
    )
}

export default Layout;