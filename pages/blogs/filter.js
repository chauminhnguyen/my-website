import React from "react";

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

export const getStaticProps = async ({ params }) => {
    const jsonBlogs = require('../public/Blogs.json');
    
    return {
        props: {
        htmlString,
        },
    };
}