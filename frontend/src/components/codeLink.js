import React from 'react';
import Link from '@docusaurus/Link';
import ExternalLink from '@theme/Icon/ExternalLink';
import {useDoc} from '@docusaurus/theme-common/internal';

const CodeLink = ({codePath}) => {
    const {metadata} = useDoc();
    const mainEditUrl = metadata.editUrl.replace('main.mdx', '');
    const codeDirectoryUrl = `${mainEditUrl}${codePath}`;

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


