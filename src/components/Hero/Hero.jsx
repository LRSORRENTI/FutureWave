"use client"

import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import { HeroData } from '@/src/utils/data'
import { motion } from 'framer-motion'

const generatePastelColor = () => {
    const r = Math.floor((Math.random() * 127) + 127);
    const g = Math.floor((Math.random() * 127) + 127);
    const b = Math.floor((Math.random() * 127) + 127);
    return `rgb(${r}, ${g}, ${b})`;
}

const Hero = () => {

    const variants = (delay) => ({
        initial: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                damping: 25,
                duration: 2.5,
                delay
            }
        }
    })

    const imgVariants = () => ({
        initial: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            }
        }
    })

    return (
        <div className="h-wrapper">
            <div className="container">
                <img src="hero/arrow.png" alt="" className="h-arrow" />
                <div className="h-container">
                    {/* left Side */}
                    <div className="h-left">
                        <div className="image-row">
                            {
                                HeroData.slice(0, 3).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={variants()}
                                            style={{ backgroundColor: generatePastelColor() }}
                                            className="person-pill-bg">
                                            <motion.div
                                                initial={"initial"}
                                                animate={"animate"}
                                                variants={imgVariants()}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="image-row">
                            {
                                HeroData.slice(3, 6).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={variants()}
                                            style={{ backgroundColor: generatePastelColor() }}
                                            className="person-pill-bg">
                                            <motion.div
                                                initial={"initial"}
                                                animate={"animate"}
                                                variants={imgVariants()}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* right Side */}
                    <div className="h-right">
                        <div className="h-title">
                            <span>Redefine How</span>
                            <span>You Grow your</span>
                            <span>Digital Business</span>
                        </div>

                        <div className="h-description">
                            Revenue based funding and execution support designed for early stage founders
                        </div>
                        <EmailBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
