import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';

const ProjectThumbnails = (props) => {
    return(
        <div>
            <h3>{props.project.fields.title}</h3>
            <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title} />
            <div><RichText content={props.project.fields.description} /></div>
            <small>
                {props.project.fields.technolgies.map((name)=>{
                    return(
                        <div key={uuid()}>{name}</div>
                    )
                })}
            </small>
        </div>
    )
}
export default ProjectThumbnails;