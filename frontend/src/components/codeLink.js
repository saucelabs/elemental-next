import React from 'react';
import Link from '@docusaurus/Link';

// The link to the folder of a code file on GitHub, at the foot of its code block
const CodeLink = ({codePath}) => {
    const baseEditUrl = 'https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/'
    const codePathParts = codePath.split('/');
    codePathParts.pop();
    const codePathBase = codePathParts.join('/');
    const codeDirectoryUrl = `${baseEditUrl}${codePathBase}`;

    return (
        <div className="es-code__foot">
            <Link to={codeDirectoryUrl}>Check out the complete solution →</Link>
        </div>
    );
}

export default CodeLink;
