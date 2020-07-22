import React from 'react';

import { Link } from 'react-router-dom';

const ProjectThumbnails = (props) => {
    return (
        <div>
            <Link to={{
                pathname: "/ShowProject",
                project: props.project.fields
            }}>
                <h3>{props.project.fields.title}</h3>
                <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title} />
            </Link>


        </div>
    )
}
export default ProjectThumbnails;