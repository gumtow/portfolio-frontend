import React from 'react';
import Layout from '../Layout';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { MainBtn } from '../styles/layout';
import { FlexCenter } from '../styles/layout';

const ShowProject = (props) => {
  
    if (props.location.project) {
      return(
          <Layout>
              <h1>This is the show page for {props.location.project.title}</h1>
              <div><RichText content={props.location.project.description} /></div>
              <div>
              {props.location.project.conceptImages.map((img, i)=>{
                    return(
                        <img key={uuid()} src={img.fields.file.url} alt={img.fields.title} />
                    )
                })}
              </div>
            <small>
                {props.location.project.technolgies.map((name)=>{
                    return(
                        <div key={uuid()}>{name}</div>
                    )
                })}
            </small>
            <div><RichText content={props.location.project.challenges} /></div>
            <FlexCenter>
                <a target="_blank" rel="noopener noreferrer" href={props.location.project.projectLink}><MainBtn>View Project</MainBtn></a>
                <a target="_blank" rel="noopener noreferrer" href={props.location.project.gitHubLink}><MainBtn>View the Code</MainBtn></a>
          </FlexCenter>
          </Layout>
      )
    }

    return(
        <div>
          ...loading
        </div>
      )

}

export default ShowProject;