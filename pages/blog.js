import Article from '../components/Article.js'
import React from 'react';
import fs from 'fs';
import Link from 'next/link'

export default function Blog(props) {
    return (
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