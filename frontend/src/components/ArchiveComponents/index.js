import React from 'react';

import styles from './styles.module.css';

export default function CardComponent({tipcontent}) {
    return (
        <div>
        <div className="e-card" id="basic">
        <div className="e-card-header">
            <div className="e-card-header-caption">
            <div className="e-card-title">Advanced UWP</div>
            </div>
        </div>
        <div className="e-card-content">
        Communicating with Windows 10 and Other Apps, the second in a five-part series written by Succinctly series
        author Matteo Pagani. To download the complete white paper, and other papers in the series, visit
        the White Paper section of Syncfusion’s Technology Resource Portal.
        </div>
        </div>
        </div>
    );
}

