import React, { useState, useEffect } from 'react';
import { getContentfulProjectPage } from '../queries/index';
import Layout from '../Layout';
import RichText from './RichText';
import { MainBtn, NarrowWrapper } from '../styles/layout';
import { FlexCenter, ProjImage } from '../styles/layout';
import * as headings from '../styles/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShowProject = (props) => {

    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulProjectPage(props.match.params.id);
        return setData(theData);
    }


    useEffect(() => {

        getData();
    });


    // console.log(data);
    // console.log(props.match.params.id);
    if (data.fields) {
        // console.log(props);

        const { title, description, technologies, projectImages, challenges, projectLink, gitHubLink, software, images, icon, headerBg, devProject } = data.fields;

        if (devProject) {
            return (
                <div>
                    {/* // Header */}
                    <Layout bg={`url(${headerBg.fields.file.url})`}>
                        <headings.HeaderOne>{title}</headings.HeaderOne>
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={projectLink}><MainBtn>View Project</MainBtn></a>
                            <a target="_blank" rel="noopener noreferrer" href={gitHubLink}><MainBtn>View Code</MainBtn></a>
                        </FlexCenter>
                    </Layout>

                    {/* // About */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">Overview</headings.HeaderTwo>
                        <NarrowWrapper>
                            {description && <RichText content={description} class="overview" />}
                        </NarrowWrapper>
                    </Layout>

                    {/* // Tech Used */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">Technologies Used</headings.HeaderTwo>
                        <FlexCenter>
                            {technologies && technologies.map((tech, i) => {
                                return (
                                    <div key={i} className="tech">
                                        {icon[i] !== "none" && <FontAwesomeIcon icon={["fab", icon[i]]} />}
                                    &nbsp; {tech}
                                    </div>
                                )
                            })}
                        </FlexCenter>
                    </Layout>

                    <Layout>
                        {projectImages && projectImages.map((projectImage, i) => {

                            if (i % 2 === 0) {
                                return (
                                    <ProjImage flexDirection="row" key={i} className="projectImage">
                                        <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                        <p>{projectImage.fields.description}</p>
                                    </ProjImage>
                                )

                            } else {
                                return (
                                    <ProjImage flexDirection="row-reverse" key={i} className="projectImage">
                                        <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                        <p>{projectImage.fields.description}</p>
                                    </ProjImage>
                                )

                            }


                        })}
                    </Layout>

                    {/* // Challenges */}
                    {challenges && <Layout bg="#eee">
                        <headings.HeaderTwo color>Challenges</headings.HeaderTwo>
                        <FlexCenter>
                            <NarrowWrapper>
                                <RichText content={challenges} class="challenges" />
                            </NarrowWrapper>
                        </FlexCenter>
                    </Layout>}

                    {/* // Links */}
                    <Layout bg="#eee">
                        <FlexCenter>
                            <a target="_blank" rel="noopener noreferrer" href={projectLink}><MainBtn>View Project</MainBtn></a>
                            <a target="_blank" rel="noopener noreferrer" href={gitHubLink}><MainBtn>View Code</MainBtn></a>
                        </FlexCenter>
                    </Layout>
                </div>
            )
        } else if (!devProject) {
            return (
                <div>
                    {/* // Header */}
                    <Layout bg={`url(${headerBg.fields.file.url})`}>

                        <FlexCenter>
                            <headings.HeaderOne>{title}</headings.HeaderOne>
                        </FlexCenter>
                    </Layout>

                    {/* // About */}
                    <Layout bg="#eee">
                        <headings.HeaderTwo color="true">Overview</headings.HeaderTwo>
                        <NarrowWrapper>
                            {description && <RichText content={description} class="overview" />}
                        </NarrowWrapper>
                    </Layout>

                    {/* // Images */}
                    <Layout>
                        {images && images.map((projectImage, i) => {



                            if (i % 2 === 0) {
                                return (
                                    <ProjImage flexDirection="row" key={i} className="projectImage">
                                        <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                        <p>{projectImage.fields.description}</p>
                                    </ProjImage>
                                )

                            } else {
                                return (
                                    <ProjImage flexDirection="row-reverse" key={i} className="projectImage">
                                        <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                        <p>{projectImage.fields.description}</p>
                                    </ProjImage>
                                )

                            }

                        })}
                    </Layout>


                    <Layout bg="#eee">
                        <FlexCenter>



                            {software && software.map((software, i) => {
                                return (
                                    <div key={i} className="software">{software}</div>
                                )
                            })}

                        </FlexCenter>
                    </Layout>





                </div>

            )
        }
    }
    return (
        <div>
            ...loading
        </div>
    )


}

export default ShowProject;