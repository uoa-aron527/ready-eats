import React from 'react'
import Populars from '../components/Populars'
import TopDessert from '../components/TopDessert'
import TopNonVeg from '../components/TopDessert'
import TopVeg from '../components/TopVeg'

interface HomepageProps{}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div>
      <Populars />
      <TopVeg />
      <TopDessert />
    </div>
  )
}

export default Homepage