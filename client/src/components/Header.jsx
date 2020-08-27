import React from 'react'
import './header.css'

import { motion } from 'framer-motion'

const svgVariants = {
    initial:{
        y:"50vh"
    },
    animate:{
        x:0,
        y:0,
        transition:{
            delay:2,
            duration:1
        }
    }
}

const pathVariants = {
    initial:{
        pathLength:0,
        scale:2
    },
    animate:{
        scale:1,
        pathLength:1,
        transition:{
            duration:2
        }
    }
}

const textVariants = {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            delay:3,
            duration:0.5
        }
    }
}

const Header = () =>{
    return(
        <div>
            <motion.svg width="200px" height="100px" viewBox="0 0 150 150"
                variants={svgVariants}
                initial="initial"
                animate="animate"
            >
                <motion.path
                    variants={pathVariants}

                    fill="none"
                    strokeWidth="3px"
                    stroke="#fff" 
                    d="m 30 30 l 20 60 l 20 -40 l 20 40 l 20 -60 l 20 0 c 8 0 21 0 20 20 c 0 8 0 21 -20 20 l -10 0 l 0 32 l -90 0"
                ></motion.path>
            </motion.svg>
            <motion.p className="text"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                WAYPOINT
            </motion.p>
        </div>
    )
}

export default Header