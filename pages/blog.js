import Article from '../components/Article.js'
import React from 'react';
import fs from 'fs';
import Head from 'next/head'
import { useState } from 'react';
import {motion} from "framer-motion"


export default function Blog(props) {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <html>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
                <title>Chow&apos;s Website</title>
            </Head>
            <body className='blog-body'>
                <h1>My Blog</h1>
                <section className="blog" id="blog-section">
                    <div className='blog-container'>
                        {
                            props.fileNames.map((ele, it) => (
                                <Article 
                                key={it}
                                time={new Date().toLocaleDateString()}
                                title= {ele.replace(".html", "")}
                                categories="Machine Learning"/>
                            ))
                        }
                    </div>
                </section>
            </body>
        </html>
    )
}

export async function getStaticProps() {
    const fileNames = fs.readdirSync('posts');
    // console.log(fileNames.length);
    return {
        props: {
            fileNames
        }
    }
}