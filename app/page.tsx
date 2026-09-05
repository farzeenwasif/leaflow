import React from 'react'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import VisionSection from '../components/VisionSection'
import OnboardingSteps from '../components/OnboardingSteps'
import AdvisoryFeature from '../components/AdvisoryFeature'
import EngagementOffer from '../components/EngagementOffer'
import Discover from '../components/Discover'
export default function page() {
  return (
    <div>
      <TopNav />
      <Navbar/>
      <Hero/>z
      <OnboardingSteps/>
      <EngagementOffer/>
      <AdvisoryFeature/>
      <Discover/>
      <VisionSection/>
    </div>
  )
}
