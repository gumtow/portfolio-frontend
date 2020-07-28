import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulSiteInfo = async () => {
    const data = await contentfulClient.getEntry('2yZ6iLGUHwQ8H0PV4xf87m');
    return data;
}

export const getContentfulHomePage = async () => {
    const data = await contentfulClient.getEntry({ entryId:'2IUGKYFF5r1KpHzfES62xf', include: 3 });
    return data;
}