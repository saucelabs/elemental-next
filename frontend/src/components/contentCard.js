import React from 'react';
import styles from './components.module.css';
import Link from '@docusaurus/Link';
import clsx from "clsx";

const ContentCard = ({content}) => {
    return (
        <div className={clsx({
            'col col--12 col--6@md': window.innerWidth < 1024,
            'row': window.innerWidth >= 1024
        })}>
            <div className={clsx('col col--2', styles.centeredImg, styles.imgColumn)}>
                <img
                    src={content.img}
                    alt={content.alt}
                    title={content.title}
                    className={clsx(styles.limitedImg)}
                />
            </div>
            <div className='col col--10'>
                <div className='row'>
                    <div className='col col--12'>
                        <Link
                            className={styles.hyperlinkH2}
                            to={content.link}
                        >
                            {content.title}
                        </Link>
                    </div>
                    <div className='col col--12'>
                        <p>{content.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;