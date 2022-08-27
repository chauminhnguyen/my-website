import Link from 'next/link'

const Article = (props) => (
    <Link href={'/blogs/' + props.title}>
        <div className="article">
            <h2>{props.title}</h2>
            <p>{props.time}</p>
            <div className='categories'>
                <p>{props.categories}</p>
            </div>
        </div>
    </Link>
)

export default Article