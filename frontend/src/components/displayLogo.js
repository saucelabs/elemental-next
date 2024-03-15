import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";


const DisplayLogo = () => {
    const srcLogo = 'img/logo.svg';
    const altLogo = "Elemental Selenium";
    return (
        <img
            style={{maxWidth: '150px'}}
            src={useBaseUrl(srcLogo)}
            alt={altLogo}
        />
    );
}

export default DisplayLogo;


