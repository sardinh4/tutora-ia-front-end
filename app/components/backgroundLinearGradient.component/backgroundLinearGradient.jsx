'use client'

import React from 'react';
import './backgroundLinearGradient.css'
import { motion } from 'framer-motion';

export default function backgroundLinearGradient({ children, heightBackground }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.8 }}
            className='mainBackgroundColor'
        >
            <div style={{ height: `${heightBackground}` }} className='mainBackground'>
                <div style={{ height: `${heightBackground}` }} className='mask'>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}