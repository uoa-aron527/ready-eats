import React from 'react'
import Populars from '../components/Populars'
import TopDessert from '../components/TopDessert'
import TopVeg from '../components/TopVeg'
import { motion } from 'framer-motion';

interface HomepageProps{}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <motion.div
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.75 }}
    >
      <Populars />
      <TopVeg />
      <TopDessert />
    </motion.div>
  )
}

export default Homepage