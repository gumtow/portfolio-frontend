import React, { useState, useEffect } from 'react';
import { getContentfulProjectPage } from '../queries/index';
import Layout from '../Layout';
import RichText from './RichText';
import { MainBtn, NarrowWrapper } from '../styles/layout';
import { FlexCenter } from '../styles/layout';
import * as headings from '../styles/type';

const ShowProject = (props) => {

    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulProjectPage(props.match.params.id);
        setData(theData);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);
    // console.log(data);
    // console.log(props.match.params.id);
    if (data.fields) {
        // console.log(props);
        
        const { title, description, thumbnail, technologies, projectImages, challenges, projectLink, gitHubLink, software, images } = data.fields;
        return (
            <div>
                {/* // Header */}
                <Layout  bg={`url(${thumbnail.fields.file.url})`}>
                    <headings.HeaderOne>{title}</headings.HeaderOne>
                    <FlexCenter>
                    <a target="_blank" rel="noopener noreferrer" href={projectLink}><MainBtn>View Project</MainBtn></a>
                    <a target="_blank" rel="noopener noreferrer" href={gitHubLink}><MainBtn>View Code</MainBtn></a>
                    </FlexCenter>
                </Layout>

                {/* // About */}
                <Layout bg="#eee">
                    <NarrowWrapper>
                        {description && <RichText content={description} />}
                    </NarrowWrapper>
                </Layout>

                 {/* // Tech Used */}
                 <Layout bg="#ddd">
                    <FlexCenter>
                        {technologies && technologies.map((tech,i)=>{
                            return(
                                <div key={i} className="tech">{tech}</div>
                            )
                        })}

                        {images && images.map((projectImage,i)=>{
                            return(
                                <div key={i} className="projectImage">
                                    <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                </div>
                            )
                        })}


                    </FlexCenter>
                </Layout>

                {/* // Images */}
                <Layout bg="#ccc">
                    <FlexCenter>
                        {projectImages && projectImages.map((projectImage,i)=>{
                            return(
                                <div key={i} className="projectImage">
                                    <img src={projectImage.fields.file.url} alt={projectImage.fields.description} />
                                </div>
                            )
                        })}

                        {software && software.map((software,i)=>{
                            return(
                                <div key={i} className="software">{software}</div>
                            )
                        })}
                        
                    </FlexCenter>
                </Layout>

                {/* // Challenges */}
                {challenges && <Layout bg="#bbb">
                    <FlexCenter>
                        <NarrowWrapper>
                            <RichText content={challenges} />
                        </NarrowWrapper>
                    </FlexCenter>
                </Layout>}

                {/* // Links */}
                <Layout bg="#aaa">
                    <FlexCenter>
                    <a target="_blank" rel="noopener noreferrer" href={projectLink}><MainBtn>View Project</MainBtn></a>
                    <a target="_blank" rel="noopener noreferrer" href={gitHubLink}><MainBtn>View Code</MainBtn></a>
                    </FlexCenter>
                </Layout>

            </div>
        )
    }

    return (
        <div>
            ...loading
        </div>
    )

}

export default ShowProject;