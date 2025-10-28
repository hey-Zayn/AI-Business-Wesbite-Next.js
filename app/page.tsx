import React from 'react'
import Circles from '@/components/ui/Circles'
import Hero from '@/components/page_component/Hero'
import CTA from '@/components/page_component/CTA'
import Pricing from '@/components/page_component/Pricing'
import Companies from '@/components/page_component/Companies'
import Bento from '@/components/page_component/Bento'


const page = () => {
  return (
    <div className=''>
      {/* <Badge_M /> */}
      <Hero/>
      <Companies/>
      <Bento/>
      <Pricing/>
      <CTA/>
      {/* <Circles/> */}
    </div>
  )
}

export default page