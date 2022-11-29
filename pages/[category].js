import Article from '../components/Article.js'
import React from 'react';
import Head from 'next/head'
// import { useState } from 'react';
// import {motion} from "framer-motion"


export function Filter_Blogs( {filtered_blogs} ) {
    const jsonData = require('../public/Blogs.json');

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
                            jsonData['blogs'].map((ele, it) => (
                                filtered_blogs.includes(ele['name']) ?
                                    <Article 
                                    key={it}
                                    time={ele['time']}
                                    title= {ele['name']}
                                    categories={ele['topic']}/>
                                : null
                            ))
                        }
                    </div>
                </section>
            </body>
        </html>
    )
}

export const getStaticPaths = async () => {
    const jsonData = require('../public/Blogs.json');

    // Get unique values
    const categories = [...new Set(jsonData['blogs'].map(item => item['topic']))];
    
    const paths = categories.map((ele) => ({
        params: { category: ele.toString() },
    }))
    return { paths, fallback: false }
};

export const getStaticProps = async ({ params: {category} }) => {
    
    const jsonData = require('../public/Blogs.json');

    // Get unique values
    // const categories = [...new Set(jsonData['blogs'].map(item => item['topic']))];

    const filtered_blogs = jsonData['blogs'].map((ele, it) => (
        ele['topic'] == category ?
            ele['name']
        : null
    ))

    return {
        props: {
            filtered_blogs
        }
    }
}

export default Filter_Blogs;