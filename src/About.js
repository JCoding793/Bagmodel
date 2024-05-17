import React from 'react'
import AboutBanner from './Layout/About/aboutbanner';
import VissionMision from './Layout/About/vission';
import AboutService from './Layout/About/service';
import NewsLeter from './Layout/newsleter';

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <VissionMision />
      <AboutService />
      <NewsLeter />
    </div>
  )
}
