import React from 'react'
import { motion } from 'framer-motion'
import "./sqares.css"

const containerVariants ={
    initial:{
        scale:0,
    },
    animate:{
        scale:1,
        transition:{
            duration:1
        }
    }
}

const sq1Variants = {
    animate:{
        opacity:1,
        rotate:[720,0],
        transition:{
            duration:6,
            yoyo:Infinity
        }
    },
    exit:{
        scale:0,
        transition:{
            duration:1
        }
    }
}
const sq2Variants = {
    animate:{
        opacity:1,
        rotate:[360,0],
        transition:{
            duration:5,
            yoyo:Infinity
        }
    },
    exit:{
        scale:0,
        transition:{
            delay:0.5,
            duration:1
        }
    }
}
const sq3Variants = {
    animate:{
        opacity:1,
        rotate:[580,0],
        transition:{
            duration:4,
            yoyo:Infinity
        }
    },
    exit:{
        scale:0,
        transition:{
            delay:1,
            duration:1
        }
    }
}
const sq4Variants = {
    animate:{
        opacity:1,
        rotate:[360,0],
        transition:{
            duration:10,
            yoyo:Infinity
        }
    },
    exit:{
        scale:0,
        transition:{
            delay:1.5,
            duration:1
        }
    }
}
const sq5Variants = {
    animate:{
        opacity:1,
        rotate:[470,0],
        transition:{
            duration:7,
            yoyo:Infinity
        }
    },
    exit:{
        scale:0,
        transition:{
            delay:2,
            duration:1
        }
    }
}

const Squares = () =>{
    return(
        <div>
            <motion.div className="container"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.div className="rotationContainer"
                    variants={sq1Variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="sq5"></div>
                </motion.div>
                <motion.div className="rotationContainer"
                    variants={sq2Variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="sq4"></div>
                </motion.div>
                <motion.div className="rotationContainer"
                    variants={sq3Variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="sq3"></div>
                </motion.div>
                <motion.div className="rotationContainer"
                    variants={sq4Variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="sq2"></div>
                </motion.div>
                <motion.div className="rotationContainer"
                    variants={sq5Variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="sq1"></div>
                </motion.div>
            </motion.div>
            

        </div>
    )
}

export default Squares