import React from 'react'
import Populars from '../components/Populars'
import TopNonVeg from '../components/TopNonVeg'
import TopVeg from '../components/TopVeg'

interface HomepageProps{}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div>
      <Populars />
      <TopVeg />
      <TopNonVeg />
    </div>
  )
}

export default Homepage