import React from 'react';
import Layout from '../Layout';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { MainBtn } from '../styles/layout';
import { FlexCenter } from '../styles/layout';

const ShowProject = (props) => {

    if (props.location.project) {
        return (
            <Layout>
                <h1>{props.location.project.title}</h1>
                <h2>Concept</h2>
                <div><RichText content={props.location.project.description} /></div>
                <h2>Wireframes</h2>
                <div>
                    {props.location.project.conceptImages.map((img, i) => {
                        return (
                            <img key={uuid()} src={img.fields.file.url} alt={img.fields.title} />
                        )
                    })}
                </div>
                <h2>Technologies</h2>
                <small>
                    {props.location.project.technolgies.map((name) => {
                        return (
                            <div key={uuid()}>{name}</div>
                        )
                    })}
                </small>
                <h2>Challenges</h2>
                <div><RichText content={props.location.project.challenges} /></div>
                <h2>Project Links</h2>
                <FlexCenter>
                    <a target="_blank" rel="noopener noreferrer" href={props.location.project.projectLink}><MainBtn>View Project</MainBtn></a>
                    <a target="_blank" rel="noopener noreferrer" href={props.location.project.gitHubLink}><MainBtn>View the Code</MainBtn></a>
                </FlexCenter>
            </Layout>
        )
    }

    return (
        <div>
            ...loading
        </div>
    )

}

export default ShowProject;