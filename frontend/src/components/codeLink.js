import React from 'react';
import Link from '@docusaurus/Link';
import ExternalLink from '@theme/Icon/ExternalLink';

const CodeLink = ({codePath}) => {
    const baseEditUrl = 'https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/'
    const codePathParts = codePath.split('/');
    codePathParts.pop();
    const codePathBase = codePathParts.join('/');
    const codeDirectoryUrl = `${baseEditUrl}${codePathBase}`;

    return (
        <div className={"margin-bottom--md text-center"}>
            <Link
                to={codeDirectoryUrl}
            >
                <ExternalLink/>
                {' '}Check out the complete solution
            </Link>
        </div>
    );
}

export default CodeLink;


