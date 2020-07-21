import React, { useState, useEffect } from 'react';
import { getContentfulAboutMe } from '../queries/index';
import RichText from './RichText';
import ProjectThumbnails from './ProjectThumbnail';
import { GridContainer, PullQuote } from '../styles/layout';
import { HeaderTwo } from '../styles/type';
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
                        const { sectionTitle, textContent, projects } = section.fields;
                        return (
                            <section key={uuid()}>
                                <HeaderTwo align color="true">{sectionTitle}</HeaderTwo>
                                {textContent && <RichText content={textContent} />}
                                {projects &&
                                    <GridContainer>
                                        {projects.map((project, i) => {
                                            return (
                                                
                                                <ProjectThumbnails project={project}  key={uuid()}/>
                                            )
                                        })}
                                    </GridContainer>
                                }
                            </section>
                        )

                    })}
                    <PullQuote>
                        <RichText content={data.fields.pullquote} />
                    </PullQuote>
                </main>
            )
        }
    return <div>loading</div>
}

export default HomePageSections