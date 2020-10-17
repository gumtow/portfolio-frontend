import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { ProjectItem } from '../styles/layout';


const ProjectThumbnails = (props) => {
    return (
        <div>
            <Link to={{
                pathname: `/ShowProject/${props.project.sys.id}`,
                project: props.project.fields,
                id: props.project.sys.id
            }}>
                <Layout bg={`url(${props.project.fields.thumbnail.fields.file.url})`}   maxWidth="true">
                    <ProjectItem>
                            <h3>{props.project.fields.title}</h3>
                    </ProjectItem>
                </Layout>
            </Link>


        </div>
    )
}
export default ProjectThumbnails;