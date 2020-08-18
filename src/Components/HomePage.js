import React, { useState, useEffect } from 'react';
import { getContentfulHomePage } from '../queries/index';

import Layout from '../Layout';
import RichText from './RichText';
import ProjectThumbnails from './ProjectThumbnail';

import * as headings from '../styles/type';
import { MainBtn, FlexCenter, ProfileImage, GridContainer, NarrowWrapper } from '../styles/layout';

import { uuid } from 'uuidv4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = (props) => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulHomePage();
        setData(theData);
    }

    useEffect(() => {
        getData();
    }, [])

    const { siteInfo } = props;
    // console.log("homepage data", data)
        ; if (Object.entries(data).length > 0) {

            return (
                <main>
                    {/* HEADER */}
                    <Layout minHeight bg={`url(${data.fields.contentSection[0].fields.backgroundImage.fields.file.url})`}>

                        <FlexCenter>
                            <ProfileImage src={siteInfo.profileImage.fields.file.url} alt={siteInfo.profileImage.fields.title} />
                        </FlexCenter>

                        <headings.HeaderOne>{data.fields.contentSection[0].fields.title}</headings.HeaderOne>

                        <headings.HeaderTwo larger>{data.fields.contentSection[0].fields.subtitle}</headings.HeaderTwo>

                        <headings.HeaderThree>
                            {data.fields.contentSection[0].fields.headerContent && <RichText content={data.fields.contentSection[0].fields.headerContent} />}
                        </headings.HeaderThree>

                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={`mailto:${siteInfo.email}`}><MainBtn>Get in touch</MainBtn></a>
                        </FlexCenter>

                        <FlexCenter>
                            <headings.InfoLinks>
                                <a target="_blank" rel="noopener noreferrer" href={siteInfo.gitHub}><FontAwesomeIcon icon={["fab", "github"]} /> GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.linkedIn}><FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={siteInfo.medium}><FontAwesomeIcon icon={["fab", "medium"]} /> Medium</a>
                            </headings.InfoLinks>
                        </FlexCenter>
                    </Layout>

                    {/* About Me */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">
                            {data.fields.contentSection[1].fields.title}
                        </headings.HeaderTwo>
                        <NarrowWrapper>
                            {data.fields.contentSection[1].fields.mainTextContent && <RichText content={data.fields.contentSection[1].fields.mainTextContent} />}
                        </NarrowWrapper>
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={`${siteInfo.linkedIn}`}><MainBtn>See a full list of skills</MainBtn></a>
                        </FlexCenter>
                    </Layout>

                    {/* Dev Projects */}
                    <Layout bg="#eee">

                        <headings.HeaderTwo color="true">
                            {data.fields.contentSection[2].fields.title}
                        </headings.HeaderTwo>

                        <GridContainer>
                            {data.fields.contentSection[2].fields.projects.map((project, i) => {
                                return (

                                    <ProjectThumbnails {...props} project={project} key={uuid()} />
                                )
                            })}
                        </GridContainer>

                    </Layout>

                    {/* Design Projects */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">
                            {data.fields.contentSection[3].fields.title}
                        </headings.HeaderTwo>

                        <GridContainer>
                            {data.fields.contentSection[3].fields.projects.map((project, i) => {
                                return (

                                    <ProjectThumbnails project={project} key={uuid()} />
                                )
                            })}
                        </GridContainer>

                    </Layout>

                    {/* More About Me */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">
                            {data.fields.contentSection[4].fields.title}
                        </headings.HeaderTwo>
                        <NarrowWrapper>
                            {data.fields.contentSection[4].fields.mainTextContent && <RichText content={data.fields.contentSection[1].fields.mainTextContent} />}
                        </NarrowWrapper>
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={`${siteInfo.linkedIn}`}><MainBtn>See a full list of skills</MainBtn></a>
                        </FlexCenter>

                    </Layout>

                </main>
            )
        }
    return <div>loading</div>
}

export default HomePage