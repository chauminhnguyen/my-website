import React from 'react';
import fs from 'fs';


const Post = ({htmlString}) => {
    return <div className='post-section' dangerouslySetInnerHTML={{__html: htmlString}} />
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    const paths = files.map(filename => ({
        params: {
            post: filename.replace(".html", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({params: {post}}) => {
    const htmlString = fs.readFileSync('posts/' + post + '.html').toString();    

    return {
        props: {
            htmlString
        }
    }
};

export default Post;