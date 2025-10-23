import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { alphabetData } from './alphabetData'; // 1. Make sure this file exists
import { Helmet } from 'react-helmet'; 

// Run: npm install react-helmet
// (You only need to run this command once)

function AlphabetPage() {
  let { letter } = useParams();
  const alphabet = alphabetData[letter.toUpperCase()];

  if (!alphabet) {
    return (
      <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col items-center max-w-[960px] flex-1">
          <h1 className="text-2xl font-bold">Sign Not Found</h1>
          <p className="mt-4">Sorry, we don't have data for the letter "{letter}".</p>
          <Link
            to="/"
            className="mt-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-[#f0f3f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] no-underline hover:bg-[#dce2e5] transition-colors"
          >
            <span className="truncate">Back to All Lessons</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Learn: {alphabet.letter} - Signora</title>
      </Helmet>
      
      <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col items-center max-w-[960px] flex-1">
          <div className="text-center mb-8">
            <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">
              Learn the Sign for Letter: <span className="text-indigo-600">{alphabet.letter}</span>
            </p>
          </div>

          <div className="w-full max-w-lg flex flex-col items-center gap-6 rounded-xl border border-[#dce2e5] bg-white p-8 shadow-sm">
            
            {/* This is the video player code */}
            <video key={alphabet.videoUrl} autoPlay loop muted playsInline className="w-full">
              <source src={alphabet.videoUrl} type="video/mp4" />
            </video>

            <p className="text-[#111518] text-lg text-center leading-relaxed">
              {alphabet.description}
            </p>
          </div>

          <Link
            to="/"
            className="mt-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-[#f0f3f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] no-underline hover:bg-[#dce2e5] transition-colors"
          >
            <span className="truncate">Back to All Lessons</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default AlphabetPage;