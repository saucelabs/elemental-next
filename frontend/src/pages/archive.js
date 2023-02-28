import React from 'react';
import Layout from '@theme/Layout';
import ArchiveComponents from '@site/src/components/ArchiveComponents';


import styles from './archive.module.css';

 

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Good Job!
        </p>
        <main>
            <ArchiveComponents />
        </main>  
      </div>
    </Layout>
  );
}