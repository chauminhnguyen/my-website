import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Projects() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const jsonData = require('../public/Projects.json');

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 100 : -100,
                opacity: 0
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                x: direction < 0 ? 100 : -100,
                opacity: 0
            };
        }
    };

    return (
        <section className="projects">
            <div className="arrow a-left">
                <span></span>
                <span></span>
                <span></span>
                <button onClick={() => {
                    if (index <= 0) {
                        setIndex(jsonData['projects'].length - 1);
                    }
                    else {
                        setIndex(index - 1);
                    }
                    setDirection(-1);
                    }}></button>
            </div>
    
            <AnimatePresence initial={false} custom={direction} exitBeforeEnter={true}>
                <motion.div
                className="project-container"
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}>
                    <div className="project-info">
                        <h1>My Projects</h1>
                        <h2>{jsonData['projects'][index]['name']}</h2>
                        <h3>Time: {jsonData['projects'][index]['time']}</h3>
                        <h3>Responsibilities:</h3>
                        <ul>
                            {jsonData['projects'][index]['Responsibilities'].map((ele, it) => (
                                <li key={it}>{ele}</li>
                            ))}
                        </ul>

                        <h3>Achievements:</h3>
                        <ul>
                            {jsonData['projects'][index]['Achievements'].map((ele, it) => (
                                <li key={it}>{ele}</li>
                            ))}
                        </ul>
                    
                        <div className="icon">
                            <a href="https://github.com/chauminhnguyen"><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </i></a>
        
                            <a href="https://github.com/chauminhnguyen"><i>
                                <img src="/home/gitlab.png" alt="" />
                            </i></a>
        
                            <a href="https://github.com/chauminhnguyen"><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                            </i></a>
                        </div>
                    </div>
        
                    <div className="thumbnail">
                        <img src={"/home/Thumbnails/" + jsonData['projects'][index]['id'] + ".svg"} alt="" />
                        {/* {jsonData['projects'][index]['id'].map((ele, it) => (
                            <img key={it} src={"/home/Thumbnails/" + ele + ".svg"} alt="" />
                        ))} */}
                    </div>
                </motion.div>
            </AnimatePresence>
    
            <div className="arrow a-right">
                <span></span>
                <span></span>
                <span></span>
                <button onClick={() => {
                    if (index >= jsonData['projects'].length - 1) {
                        setIndex(0);
                    }
                    else {
                        setIndex(index + 1);
                    }
                    setDirection(1);
                    }}></button>
            </div>
        </section>
    )
}

export default Projects;