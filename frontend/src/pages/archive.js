import * as React from 'react';
import Layout from '@theme/Layout';
//import List from '@site/src/components/ArchiveComponents/CardLayout/list';
//import Card from '@site/src/components/ArchiveComponents/card/card';

import archiveStyles from './archive.module.css';

function Card ({ headline, text, contentUrl }) {
    return  (
        <div className = {archiveStyles.archive}>
            <div className = {archiveStyles.card}>
            <div className={archiveStyles.heading}>
                <a href = {contentUrl}>{headline}</a>
            </div>
            <div className={archiveStyles.text}>
                <p> {text} </p>
            </div>
            </div>
        </div>
    );
}
   
export default function Archive() {
    return (
        <Layout 
            title= "Elemental Selenium Archives"
            description="Elemental Selenium Archives">
            <div className='header'>
                <div>
                <Card
                    headline= {'1: How to Upload a File'}
                    text= {"Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box..."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'2: How to Download a File'}
                    text= {"Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium’s reach..."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'3: How to Work with Frames'}
                    text= {"On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped up..."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'4: How to Work with Multiple Windows'}
                    text= {"Occasionally you'll run into a link or action in the application you're testing that will open a new window. To make it work, you’ll need to switch between them..."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'5: How to Select from a Dropdown List'}
                    text= {"Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'6: How to Export Tests from Selenium IDE'}
                    text= {"One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'7: Using a Page Object'}
                    text= {"Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium’s reach..."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'8: How to Download a File Without a Browser'}
                    text= {"Previously we looked at how to download files with Selenium by configuring the browser to download them locally. While this works, it requires a custom configuration that is inconsistent browser to browser"}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'9: Using a Base Page Object'}
                    text= {"Previously we discussed creating a simple Page Object to capture the behavior of a page we were interacting with. Let’s improve on that."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
                <Card
                    headline= {'5: How to Select from a Dropdown List'}
                    text= {"Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it."}
                    contentUrl= {"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                />
            </div>
        </div>
        </Layout>
        
        
        
    );
}

