import React from 'react'
import Divider from './Layout/divider';
import BetSeller from './Layout/betseller';
import FaqSection from './Layout/faqsection';
import NewsLeter from './Layout/newsleter';
import Banner from './Layout';
export default function HomePage() {
  return (
    <div>
      <Banner />
      <Divider />
      <BetSeller />
      <FaqSection />
      <NewsLeter />
    </div>
  )
}
