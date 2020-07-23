import React, { useState, useEffect } from 'react';
import { getContentfulAboutMe } from '../queries/index';
import RichText from './RichText';
import ProjectThumbnails from './ProjectThumbnail';
import { GridContainer, PullQuote, NarrowWrapper, GridContainerOffset } from '../styles/layout';
import { HeaderTwo, SkillList } from '../styles/type';
import { uuid } from 'uuidv4';
// import { Link } from 'react-router-dom';

const HomePageSections = () => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulAboutMe();
        setData(theData);
    }

    useEffect(() => {
        getData();
    }, [])

        console.log(data)
        ; if (Object.entries(data).length > 0) {
            return (
                <main>
                    {data.fields.homePageSections.map((section, i) => {
                        const { sectionTitle, textContent, projects, sideText} = section.fields;
                        return (
                            <section key={uuid()}>
                                <NarrowWrapper>
                                    <HeaderTwo align color="true">{sectionTitle}</HeaderTwo>
                                    <GridContainerOffset>
                                        {textContent && <RichText content={textContent} />}
                                        <SkillList>
                                            {sideText && <RichText content={sideText} />}
                                        </SkillList>
                                    </GridContainerOffset>
                                </NarrowWrapper>
                                {projects &&
                                    <GridContainer>
                                        {projects.map((project, i) => {
                                            return (

                                                <ProjectThumbnails project={project} key={uuid()} />
                                            )
                                        })}
                                    </GridContainer>
                                }
                            </section>
                        )

                    })}
                    <NarrowWrapper>
                        <PullQuote>
                            <RichText content={data.fields.pullquote} />
                        </PullQuote>
                    </NarrowWrapper>
                </main>
            )
        }
    return <div>loading</div>
}

export default HomePageSections