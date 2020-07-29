import React from 'react';
import Layout from '../Layout';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { MainBtn, NarrowWrapper } from '../styles/layout';
import { FlexCenter } from '../styles/layout';
import * as headings from '../styles/type';

const ShowProject = (props) => {

    if (props.location.project) {
        console.log(props);
        const { title, description, thumbnail, technologies, challenges, projectLink, gitHubLink } = props.location.project;
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
                    </FlexCenter>
                </Layout>

                {/* // Images */}
                <Layout bg="#ccc">
                    <FlexCenter>
                        {technologies && technologies.map((tech,i)=>{
                            return(
                                <div key={i} className="tech">{tech}</div>
                            )
                        })}
                    </FlexCenter>
                </Layout>

                {/* // Challenges */}
                <Layout bg="#bbb">
                    <FlexCenter>
                        {technologies && technologies.map((tech,i)=>{
                            return(
                                <div key={i} className="tech">{tech}</div>
                            )
                        })}
                    </FlexCenter>
                </Layout>

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