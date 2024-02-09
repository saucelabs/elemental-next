import React from 'react';
import CodeBlock from "@theme/CodeBlock";
import CodeLink from "./codeLink";

function TipCode({codePath, language}) {
    const code = require(`!!raw-loader!@site/tips/${codePath}`);

    return (
        <div>
            <CodeBlock
                language={language}
                showLineNumbers={true}
                title={codePath}
            >
                {code.default}
            </CodeBlock>
            <CodeLink codePath={codePath}/>
        </div>
    );
}

export default TipCode;