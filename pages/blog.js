import Article from '../components/Article.js'
import React from 'react';
import fs from 'fs';
import Head from 'next/head'

export default function Blog(props) {
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
            <body>
                <section className="blog" id="blog-section">
                    <h1>My Blog</h1>
                    {
                        props.fileNames.map((ele) => (
                            <Article 
                            key={ele.replace(".html", "")}
                            thumbnail="./temp/article_t.png" 
                            title= {ele.replace(".html", "")} 
                            desc="Ay lmao diz iz a desc Ay lmao diz iz a desc Ay lmao diz iz a desc"/>
                        ))
                    }
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