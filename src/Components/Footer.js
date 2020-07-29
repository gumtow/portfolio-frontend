import React from 'react';
import Layout from '../Layout';
import * as headings from '../styles/type';
import { MainBtn, FlexCenter } from '../styles/layout';


const Footer = (props) => {
        const { siteInfo } = props;
        return(
            <Layout bg="#293241">
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={`mailto:${siteInfo.email}`}><MainBtn>Get in touch</MainBtn></a>
                        </FlexCenter>

                        <FlexCenter>
                            <headings.InfoLinks>
                                <a target="_blank" rel="noopener noreferrer" href={siteInfo.gitHub}>GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.linkedIn}>LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.medium}>Medium</a>
                            </headings.InfoLinks>
                        </FlexCenter>

                    </Layout>
        )
    }

export default Footer;
