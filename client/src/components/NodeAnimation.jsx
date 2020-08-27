import React,{useEffect, useState} from 'react'

import { motion, AnimatePresence } from 'framer-motion'


const nodeVariants1={
    animate:{
        y:[0,-100,0],
        transition:{
            duration:2,
            yoyo:Infinity
        }
    },
    exit:{
        y:1000,
        transition:{
            duration:3,
            ease:"easeInOut"
        }
    }
}
const nodeVariants2={
    animate:{
        y:[0,-100,0],
        transition:{
            delay:0.2,
            duration:2,
            yoyo:Infinity
        }
    },
    exit:{
        y:1000,
        transition:{
            duration:5,
            ease:"easeInOut"
        }
    }
}
const nodeVariants3={
    animate:{
        y:[0,-100,0],
        transition:{
            delay:0.4,
            duration:2,
            yoyo:Infinity
        }
    },
    exit:{
        y:1000,
        transition:{
            duration:2,
            ease:"easeInOut"
        }
    }
}
const nodeVariants4={
    animate:{
        y:[0,-100,0],
        transition:{
            delay:0.6,
            duration:2,
            yoyo:Infinity
        }
    },
    exit:{
        y:1000,
        transition:{
            duration:4,
            ease:"easeInOut"
        }
    }
}
const nodeVariants5={
    animate:{
        y:[0,-100,0],
        transition:{
            delay:0.8,
            duration:2,
            yoyo:Infinity
        }
    },
    exit:{
        y:1000,
        transition:{
            duration:1,
            ease:"easeInOut"
        }
    }
}

const NodeAnimation = () =>{

    return(
        <div style={{marginTop:"400px"}}>
            <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                variants={nodeVariants1}
                animate="animate"
                exit="exit"
            ></motion.div>
            <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                variants={nodeVariants2}
                animate="animate"
                exit="exit"
            ></motion.div>
            <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                variants={nodeVariants3}
                animate="animate"
                exit="exit"
            ></motion.div>
            <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                variants={nodeVariants4}
                animate="animate"
                exit="exit"
            ></motion.div>
            <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                variants={nodeVariants5}
                animate="animate"
                exit="exit"
            ></motion.div>
        </div>
    )
}

export default NodeAnimation


/**
 * {showAnimation && (
                <motion.div style={{marginTop:"200px"}} exit={{y:-1000}}>
                    <motion.div style={{ margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                        variants={nodeVariants1}
                        animate="animate"
                        exit="exit"
                    ></motion.div>
                    <motion.div style={{margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                        variants={nodeVariants2}
                        animate="animate"
                    ></motion.div>
                    <motion.div style={{margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                        variants={nodeVariants3}
                        animate="animate"
                    ></motion.div>
                    <motion.div style={{margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                        variants={nodeVariants4}
                        animate="animate"
                    ></motion.div>
                    <motion.div style={{margin:"5px", display:"inline-block", width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"white"}}
                        variants={nodeVariants5}
                        animate="animate"
                    ></motion.div>
                </motion.div>
                ) 
            }
 */