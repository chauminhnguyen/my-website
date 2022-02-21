import Link from 'next/link'
import {motion} from "framer-motion"

const Article = (props) => (    
    <Link href={'/' + props.title}>
        <div className="article">
            <h2>{props.title}</h2>
            <p>{props.time}</p>
            <p>{props.categories}</p>
        </div>
    </Link>
)

export default Article