import React from 'react';
import ReactMarkdown from 'react-markdown';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const RichText = (props) => {

    return(
        <div>
            <ReactMarkdown escapeHtml={false} source={documentToHtmlString(props.content)} />
        </div>
    )
}

export default RichText;