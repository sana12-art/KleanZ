import React from 'react';
import Navbar from '../components/landing/Navbar';
import ValuesSection from '../components/landing/ValuesSection';
import Footer from '../components/landing/Footer';

export default function NosValeurs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ValuesSection />
      </div>
      <Footer />
    </div>
  );
}