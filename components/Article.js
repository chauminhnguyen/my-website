import Link from 'next/link'

const Article = (props) => (    
    <Link href={'/' + props.title}>
        <div className="article">
            <img src={props.thumbnail} />
            <div className="descriptor">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    </Link>
)

export default Article