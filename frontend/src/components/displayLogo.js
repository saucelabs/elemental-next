import React from "react";
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from "@docusaurus/useBaseUrl";


const DisplayLogo = () => {
    const {colorMode, setColorMode} = useColorMode();
    const srcLogo = colorMode === 'dark' ? 'img/logo-dark.png' : 'img/logo-light.png';
    const altLogo = "Elemental Selenium";
    return (
        <img
            style={{maxWidth: '128px'}}
            src={useBaseUrl(srcLogo)}
            alt={altLogo}
        />
    );
}

export default DisplayLogo;


