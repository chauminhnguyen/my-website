import Link from 'next/link'

const Article = (props) => (
    <Link href={'/blogs/' + props.title}>
        <div className="article">
            <h2>{props.title}</h2>
            <p className='time'>Date: {props.time}</p>
            <Link href={props.categories}>
                <div className='categories'>
                    <p>{props.categories}</p>
                </div>
            </Link>
        </div>
    </Link>
)

export default Article