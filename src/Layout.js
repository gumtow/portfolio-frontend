import React from 'react';
import { FullWidthWrapper } from './styles/layout';
import { Wrapper } from './styles/layout';

const Layout = (props) => {
    return(
        <FullWidthWrapper bg={props.bg} bgSize={props.bgSize}>
            <Wrapper maxWidth={props.maxWidth} minHeight={props.minHeight}>
                {props.children}
            </Wrapper>
        </FullWidthWrapper>
    )
}

export default Layout;