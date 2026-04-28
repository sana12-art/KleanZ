import React from 'react';
import Navbar from '../components/landing/Navbar';
import StorySection from '../components/landing/StorySection';
import Footer from '../components/landing/Footer';

export default function NotreHistoire() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <StorySection />
      </div>
      <Footer />
    </div>
  );
}