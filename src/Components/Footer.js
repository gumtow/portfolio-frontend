import React from 'react';
import Layout from '../Layout';
import * as headings from '../styles/type';
import { MainBtn, FlexCenter } from '../styles/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = (props) => {
        const { siteInfo } = props;
        return(
            <Layout bg="#293241">
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={`mailto:${siteInfo.email}`}><MainBtn>Get in touch</MainBtn></a>
                        </FlexCenter>

                        <FlexCenter>
                            <headings.InfoLinks>
                                <a target="_blank" rel="noopener noreferrer" href={siteInfo.gitHub}><FontAwesomeIcon icon={["fab", "github"]} /> GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.linkedIn}><FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.medium}><FontAwesomeIcon icon={["fab", "medium"]} /> Medium</a>
                            </headings.InfoLinks>
                        </FlexCenter>

                    </Layout>
        )
    }

export default Footer;
