import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('4W6F1PorgiXDsgPExBP3pr');
    return data;
}

export const getContentfulAboutMe = async () => {
    const data = await contentfulClient.getEntry('5f3if9JxxQnlI7LBucdfck');
    return data;
}